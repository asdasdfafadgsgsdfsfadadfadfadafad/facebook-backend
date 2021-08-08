const express = require("express");
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())


const pg = require("pg").Client;

const client = new pg({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
  
app.get("/",async (req,resp)=>{
    await client.connect()
    const data = await client.query("select * from users")
    await client.end()
    resp.json(data)
})
app.listen(process.env.PORT || 3000)
























