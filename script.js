const express = require("express")
const app = express()
const pg = require("pg")

const client = new pg({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: true
  }
})

app.get("/",(req,resp)=>{
  client.connect();
  client.query('select * from users', (err, result) => {
      console.log('err', err)
      console.log('result', result)
      return resp.json(result.rows)
  })
  resp.json("asdasdas")

})


app.listen(process.env.PORT)