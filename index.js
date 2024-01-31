//loads .env file contents into process.env by default
require('dotenv').config()

//import express
const express = require('express')

const cors = require('cors')

const db =require("./DB/connection")

const router = require('./Routes/router')

const appMiddleware = require("./Middlewares/appMiddleware")

//create a backend application using the express
const pfServer = express()//Creates an Express application.

//use cors
pfServer.use(cors())
pfServer.use(express.json())//Returns middleware that only parses json
pfServer.use(appMiddleware)
pfServer.use(router)
//port creation
const PORT = 4000 || process.env.PORT

//server listening 
pfServer.listen(PORT,()=>{
    console.log("listening on port" + PORT);
})

//localhost:4000 -> res pfServer is started...
pfServer.get('/',(req,res)=>{
    res.send(`<h1>Project Fair Server Started</h1>`)
})