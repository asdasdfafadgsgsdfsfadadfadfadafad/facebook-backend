const express = require("express");
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

app.get("/",(req,resp)=>{
    
    resp.json("dose it even work")
    // resp.send("this works yey")
})
console.log("dose it work")
app.listen(process.env.PORT || 3000)






















