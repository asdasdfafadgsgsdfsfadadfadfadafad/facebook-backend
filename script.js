const express = require("express");
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())





const pg = require("pg").Client;
const { json } = require("express");
const client = new pg({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })


app.get("/",async (req,resp)=>{


    // client.connect()
    // .then(()=>client.query("select * from users"))
    // .then(data=>{
    //     client.end()
    //     resp.json(data)
    // })
    // .finally(()=>client.end())
    await client.connect()
    const data = await client.query("select * from users")
    await client.end()
    resp.json(data)
    // .then(()=>client.query("select * from users"))
    // .then(data=>{resp.json(data)})
    // .finally(()=>client.end())
    

})
app.listen(process.env.PORT || 3000)

   
  
  
  







// client.connect()
// .then(()=>client.query("select * from users"))
// .then(data=>{console.log(data)})
// .finally(()=>client.end())

















