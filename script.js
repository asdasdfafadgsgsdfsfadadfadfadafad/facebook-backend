const express = require("express")
const app = express()
// const pg = require("pg")
// const client = new pg({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//       rejectUnauthorized: true
//     }
//   })

app.get("/",(req,resp)=>{
   resp.json("helyo")
})


app.listen(process.env.PORT)