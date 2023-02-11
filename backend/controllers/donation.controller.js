const Donation = require("../models/donations.model")


exports.AllDonations=async(req,res)=>{
    try {

        const donations = await Donation.find({})

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

        const donations = await Donation.findOne({CreatedBy:req.params.id})

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
    try {
        const {
            name,
            description,
            targetAmount,
            user,
        } = req.body

        const donation = new Donation({
            name,
            description,
            targetAmount,
            CreatedBy:user._id,
        })

        await donation.save()

        return res.status(200).json({
            success:true,
            data:"Donation created"
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
            Amount,
            _id
        } = req.body

        const donation = await Donation.findById(_id)

        if(!donation){
            return res.status(400).json({
                success:false,
                error:"Donation not found"
            })
        }

        if( donation.donatedAmount + Amount>= donation.targetAmount){
            donation.completed=true
        }
        donation.donatedAmount += Amount

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