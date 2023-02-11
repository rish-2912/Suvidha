const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    userName:String,
    firstName:String,    
    lastName:String,
    email:String,

    password:String,
    communities:[],
    // donations:[]
});


module.exports = mongoose.model("user", UserSchema);
