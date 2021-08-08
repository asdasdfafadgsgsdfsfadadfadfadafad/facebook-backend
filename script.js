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
      const insert = await client.query("INSERT INTO users(email,password) VALUES($1,$2) RETURNING *",['brianc', 'brian.m.carlson@gmail.com'])
      const data = await client.query("SELECT * FROM users")
      resp.json(insert)
  } catch(e) {
      resp.json("error")
  } finally {
      client.end()
  }
})
app.listen(process.env.PORT || 3000)
