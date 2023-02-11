const mongoose = require("mongoose");

const DonationSchema = mongoose.Schema({
    name:String,
    description:String,    
    StartDate:{
        type:String,
        default:Date.now(),
        immutable:true
    },
    
    targetAmount:Number,
    donatedAmount:Number,

    CreatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    communities:[],
    completed:{
        type:Boolean,
        default:false
    }
    // donations:[]
});


module.exports = mongoose.model("donation", DonationSchema);
