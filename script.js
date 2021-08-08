// const express = require("express");
// const cors = require("cors")
// const app = express()
// app.use(express.json())
// app.use(cors())
// const pg = require("pg").Client;
// const { json } = require("express");
// const client = new pg({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//       rejectUnauthorized: false
//     }
//   })
// app.get("/",async (req,resp)=>{
//     await client.connect()
//     const data = await client.query("select * from users")
//     await client.end()
//     resp.json(data)
// })
// app.listen(process.env.PORT || 3000)

const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
// const knex = require('knex')({
//   client:"pg",
//   connection:{connectionString:process.env.DATABASE_URL,ssl:true}
// });
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; //add this line is you have ssl:true
const knex = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  },
}); 

app.get("/",async (req,resp)=>{
    const data = await knex.select("*").from("users")
    resp.json(data)
})
app.listen(process.env.PORT || 3000)
   
  
  
  























