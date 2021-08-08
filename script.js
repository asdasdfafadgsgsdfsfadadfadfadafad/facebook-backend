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
  try {
      await client.connect
      const data  = client.query("select * from userxxs")
      resp.json(data)
  } catch(e) {
      resp.json("error")
  } finally {
      client.end()
  }
})
app.listen(process.env.PORT || 3000)
