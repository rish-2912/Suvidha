const mongoose = require("mongoose");

const DonationSchema = mongoose.Schema({
    name:String,
    description:String,    
    date:{
        type:String,
        default:Date.now()
    },
    
    targetAmount:Number,
    donatedAmount:Number,

    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    communities:[],
    // donations:[]
});


module.exports = mongoose.model("donation", DonationSchema);
