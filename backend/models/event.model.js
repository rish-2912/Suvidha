const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
    name:String,
    description:String, 
    
    category:{
        type:String,
        default:'event'
    },

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
    state:String,
    city:String,

    category:{
        type:String
    },

    Link:{
        type:String,
        default:""
    },
    image:String,

    Attendees:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }],
    // donations:[]
});


module.exports = mongoose.model("event", EventSchema);
