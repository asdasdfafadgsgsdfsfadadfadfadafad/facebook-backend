// // const express = require("express");
// // const cors = require("cors")
// // const app = express()
// // app.use(express.json())
// // app.use(cors())
// // const pg = require("pg").Client;
// // const { json } = require("express");
// // const client = new pg({
// //     connectionString: process.env.DATABASE_URL,
// //     ssl: {
// //       rejectUnauthorized: true
// //     }
// //   })

// var connString = 'postgres://mpbbgipyupbyjm:ee206bab993795a61583939d27ab71694c08213faf5b246c3709c141fb3c33f9@ec2-44-196-250-191.compute-1.amazonaws.com:5432/d35glak0q560u4';

// var pg = require('pg');
// var express = require("express");
// var app = express();
// app.use(express.logger());

// app.get('/', function(request, response) {

// 	pg.connect(connString, function(err, client, done) {
// 		if(err) response.send("Could not connect to DB: " + err);
// 		client.query('SELECT * FROM users', function(err, result) {
// 			done();
// 			if(err) return response.send(err);
// 			response.send(result.rows);
// 		});
// 	});
// });

// app.listen(process.env.PORT || 3000)

// // app.get("/",async (req,resp)=>{
  

//   // try {
//   //     await client.connect
//   //     const data  =  client.query("SELECT * FROM users")
//   //     resp.json(data)
//   // } catch(e) {
//   //     resp.json("error")
//   // } finally {
//   //     client.end()
//   // }




//   // try {
//   //     await client.connect()
//   //     const data = await client.query("select * from users")
//   //     resp.json(data.rows)
//   //     client.end()
//   //     client.end()
//   // } catch(e) {
//   //     console.log(e)
//   //     resp.json(e)
//   // } finally {
//   //     client.end()
//   //     client.end()
//   // }


//   // try {
//   //     await client.connect()
//   //     const data = await client.query("INSERT INTO users(email,password) VALUES(1$,2$)",["asdas@gmail.com","12344321"])
//   //     resp.json("done")
//   //     client.end()
//   //     client.end()
//   // } catch(e) {
//   //     console.log(e)
//   //     resp.json(e)
//   // } finally {
//   //     client.end()
//   //     client.end()
//   // }
  


// // })
// // app.listen(process.env.PORT || 3000)




// ================================================
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
// const db = knex({
//     client: "pg",
//     connection:
//         process.env.DATABASE_URL ||
//         `postgres://${process.env.USER}@127.0.0.1:5432/persons`,
//     searchPath: "public",
//     pool: {
//         min: 2,
//         max: 10,
//     },
//     migrations: {
//         tableName: "users",
//     },
// });

// app.get("/",async (req,resp)=>{
//     try { 
//       const welcomeMessage = await db.select().table("users")
//       console.log("hi")
//       resp.json(welcomeMessage)
//     }catch(e){
//       resp.json(e)
    // }
    // client.connect()
    // .then(()=>client.query("select * from users"))
    // .then(data=>{
    //     client.end()
    //     resp.json(data)
    // })
    // .finally(()=>client.end())


    // await client.connect()
    // const data = await client.query("select * from users")
    // await client.end()
    // resp.json(data)


    // .then(()=>client.query("select * from users"))
    // .then(data=>{resp.json(data)})
    // .finally(()=>client.end())
    

// })
// app.listen(process.env.PORT || 3000)

   
  
  
  







// client.connect()
// .then(()=>client.query("select * from users"))
// .then(data=>{console.log(data)})
// .finally(()=>client.end())
// ======================================================================================
import express from 'express';

import {Client} from 'pg';

const getClient = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello, World!!!'
    });
});

app.get('/users', (req, res) => {
    const client = getClient();
   client.connect();

   client.query('select * from users', (err, result) => {
       console.log('err', err)
       console.log('result', result)
       return res.status(200).json(result.rows)
   })
});

app.listen(process.env.PORT , () => {
    console.log(`Server is running on `);
});

















