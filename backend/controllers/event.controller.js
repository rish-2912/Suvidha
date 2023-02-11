const Event = require("../models/event.model")


exports.AllEvents=async(req,res)=>{
    try {

        const events = await Event.find({})

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
    try {
        const {
            name,
            description,
            address,
            user,
            Link,
            StartDate,
            EndDate
        } = req.body

        const event = new Event({
            name,
            description,
            
            address,
            CreatedBy:user._id,
            Link,
            StartDate,
            EndDate
        })

        await event.save()

        return res.status(200).json({
            success:true,
            data:"Event created"
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