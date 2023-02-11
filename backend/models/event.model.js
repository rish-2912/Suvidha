const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
    name:String,
    description:String,    
    CreatedOn:{
        type:String,
        default:Date.now(),
        immutable:true
    },
    StartDate:{
        type:String,
    },
    EndDate:{
        type:String,
    },
    CreatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    address:String,

    Link:{
        type:String,
        default:""
    },

    Attendees:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }],
    // donations:[]
});


module.exports = mongoose.model("event", EventSchema);
