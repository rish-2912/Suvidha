const Event = require("../models/event.model")
const formidable = require("formidable");
const fs =require("fs")

exports.AllEvents=async(req,res)=>{
    try {

        const events = await Event.find({}).populate("CreatedBy")

        return res.status(200).json({
            success:true,
            data:events
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            error:"Error in server"
        })
    }
}

exports.MyEvents=async(req,res)=>{
    try {

        const events = await Event.find({CreatedBy:req.params.id})

        return res.status(200).json({
            success:true,
            data:events
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            error:"Error in server"
        })
    }
}

exports.CreateEvent=async(req,res)=>{
    const form = formidable();
    try {
        form.parse(req, async (err, fields, files) => {
            const {
                name,
                description,
                address,
                user_id,
                Link,
                StartDate,
                EndDate,
                state,
                city,
                category
            } = fields

            const { image }=files
            // console.log(image)

            const getImageName = files.image.originalFilename;

            const randomNumber = Math.floor(Math.random() * 9999);
            const newImageName = randomNumber + getImageName;
            files.image.originalFilename = newImageName;
            const newPath =
                __dirname +
                `../../../frontend/public/images/${files.image.originalFilename}`;

            fs.copyFile(files.image.filepath, newPath, async (error) => {
                if(!error){
                    const event = new Event({
                        name,
                        description,
                        category,
                        address,
                        CreatedBy:user_id,
                        Link,
                        StartDate,
                        EndDate,
                        state,
                        city,
                        image:files.image.originalFilename
                    })
        
                    await event.save()
                    
                    return res.status(200).json({
                        success:true,
                        data:"Event created"
                    })
                }
            })
        })



    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            error:"Error in server"
        })
    }
}

exports.AttendEvent=async(req,res)=>{
    try {
        const {
            _id
        } = req.body

        const event = await Event.findById(req.params.id)

        if(!event){
            return res.status(400).json({
                success:false,
                error:"Event not found"
            })
        }

        if( !event.Attendees.includes(_id) ){
            event.Attendees.push(_id)
        }


        await event.save()

        return res.status(200).json({
            success:true,
            data:event.Link
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            error:"Error in server"
        })
    }
}

exports.UpdateEvent=async(req,res)=>{
    try {
        const {
            _id
        } = req.body

        const event = await Event.updateOne({_id},{$set:req.body})

        return res.status(200).json({
            success:true,
            data:"Event Edited"
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            error:"Error in server"
        })
    }
}