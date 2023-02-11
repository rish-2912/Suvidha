const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
    name:String,
    description:String,    
    date:{
        type:String,
        default:Date.now()
    },
    address:String,

    Attendees:[],
    // donations:[]
});


module.exports = mongoose.model("donation", EventSchema);
