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
      rejectUnauthorized: true
    }
  })

  const database = knex({
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });



app.get("/",async (req,resp)=>{
  const x = await database.select("*").from("users")
  resp.json(x)
  // try {
  //     await client.connect
  //     const data  =  client.query("SELECT * FROM users")
  //     resp.json(data)
  // } catch(e) {
  //     resp.json("error")
  // } finally {
  //     client.end()
  // }




  // try {
  //     await client.connect()
  //     const data = await client.query("select * from users")
  //     resp.json(data.rows)
  //     client.end()
  //     client.end()
  // } catch(e) {
  //     console.log(e)
  //     resp.json(e)
  // } finally {
  //     client.end()
  //     client.end()
  // }


  // try {
  //     await client.connect()
  //     const data = await client.query("INSERT INTO users(email,password) VALUES(1$,2$)",["asdas@gmail.com","12344321"])
  //     resp.json("done")
  //     client.end()
  //     client.end()
  // } catch(e) {
  //     console.log(e)
  //     resp.json(e)
  // } finally {
  //     client.end()
  //     client.end()
  // }
  


})
app.listen(process.env.PORT || 3000)
