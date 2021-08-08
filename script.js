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
const getdata = () =>{
  await client.connect()
  const data = await client.query("select * from users")
  await client.end()
  return data
}
getdata()
app.get("/",async (req,resp)=>{
    
  client.connect()
  .then(()=>client.query("select * from users"))
  .then(data=>{
     client.end()
     console.log(data)
    })
  .finally(()=>{
    console.log("hi") 
    })
  resp.json("hi")
  
})
app.listen(process.env.PORT || 3000)
// const pg = require("pg").Client
// const client = new pg({
//    user:"postgres",
//    password:"01203328888m",
//    host:"127.0.0.1",
//    port:5432,
//    database:"boat"
// })

// client.connect()
//     .then(()=>client.query("select * from users"))
//     .then(data=>{
//        client.end()
//        console.log(data)
//       })
//     .finally(()=>{
//       console.log("hi") 
//       })


