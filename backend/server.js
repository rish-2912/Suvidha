const express = require("express");
const app = express();
const cors = require("cors")
const morgan = require("morgan");
const connectDB = require("./connectDB"); 

const dotenv = require('dotenv')



console.log(process.env.SECRET)

const main=()=>{
    connectDB()
    app.listen(5000,()=>{
        console.log("Server started on port 5000")
    })
}


main()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json({ extended: false, limit: "50mb" }));

app.get("/",(req,res)=>{
    res.send("TriNit team HAX backend")
    console.log(process.env.COOKIE_EXP)
})



//routes 

app.use("/donation",require("./routes/donation.route"));
app.use("/event",require("./routes/event.route"));
app.use("/user",require("./routes/auth.route"));

