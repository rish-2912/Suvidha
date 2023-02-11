const express = require("express");
const app = express();
const cors = require("cors")
const morgan = require("morgan")

const main=()=>{
    app.listen(5000,()=>{
        console.log("Server started on port 5000")
    })
}


main()

app.use(morgan("dev"))
app.use(cors())

app.get("/",(req,res)=>{
    res.send("TriNit team HAX backend")
})



//routes 

app.use()