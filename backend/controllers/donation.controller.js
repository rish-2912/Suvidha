const Donation = require("../models/donations.model")
const formidable = require("formidable");
const fs =require("fs")

exports.AllDonations=async(req,res)=>{
    try {

        const donations = await Donation.find({}).populate("CreatedBy")

        return res.status(200).json({
            success:true,
            data:donations
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            error:"Error in server"
        })
    }
}

exports.MyDonations=async(req,res)=>{
    try {

        const donations = await Donation.find({CreatedBy:req.params.id})

        return res.status(200).json({
            success:true,
            data:donations
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            error:"Error in server"
        })
    }
}

exports.CreateDonation=async(req,res)=>{
    const form = formidable();
    try {
        form.parse(req, async (err, fields, files) => {
            const {
                name,
                description,
                targetAmount,
                user_id,
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

                    const donation = new Donation({
                        name,
                        description,
                        targetAmount,
                        CreatedBy:user_id,
                        category,
                        image:files.image.originalFilename
                    })

                    await donation.save()

                    return res.status(200).json({
                        success:true,
                        data:"Donation created"
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

exports.AddDonation=async(req,res)=>{
    try {
        const {
            totalcost,
            _id
        } = req.body

        const donation = await Donation.findById(_id)

        if(!donation){
            return res.status(400).json({
                success:false,
                error:"Donation not found"
            })
        }

        if( donation.donatedAmount + totalcost>= donation.targetAmount){
            donation.completed=true
        }
        donation.donatedAmount += totalcost
        if(!donation.donors.includes(req.params.id)){
            donation.donors.push(req.params.id)
        }

        await donation.save()

        return res.status(200).json({
            success:true,
            data:"Amount Donated"
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            error:"Error in server"
        })
    }
}

exports.UpdateDonation=async(req,res)=>{
    try {
        const {
            _id
        } = req.body

        const donation = await Donation.updateOne({_id},{$set:req.body})

        return res.status(200).json({
            success:true,
            data:"Donation Edited"
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            error:"Error in server"
        })
    }
}