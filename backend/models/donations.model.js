const mongoose = require("mongoose");

const DonationSchema = mongoose.Schema({
    name:String,
    description:String,
    category:{
        type:String,
        default:'Donation'
    },

    StartDate:{
        type:String,
        default:Date.now(),
        immutable:true
    },
    
    targetAmount:{
        type:Number,
        default:0
    },
    donatedAmount:{
        type:Number,
        default:0
    },

    CreatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    communities:[],
    completed:{
        type:Boolean,
        default:false
    },
    hasEvent:{
        type:Boolean,
        default:false
    },
    Events:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"event"
    }]
    // donations:[]
});


module.exports = mongoose.model("donation", DonationSchema);
