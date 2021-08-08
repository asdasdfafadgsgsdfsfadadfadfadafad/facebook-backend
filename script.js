const express = require("express")
const app = express()
const pg = require("pg")


app.get("/",(req,resp)=>{
  const client = new pg({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: true
    }
  })
  client.connect();
  client.query('select * from users', (err, result) => {
      console.log('err', err)
      console.log('result', result)
      return resp.status(200).json(result.rows)
  })

})


app.listen(process.env.PORT)