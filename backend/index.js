// configuration
require('dotenv').config() ;

// Imports
const express = require("express") ;
const mongoose = require("mongoose") ;
const cors = require("cors") ;

// app initialization and variables
const app = express() ;
const PORT = process.env.PORT || 3000 ;
const MONGO_URL = process.env.MONGO_URL ;


// Middlewares
app.use(cors()) ;
app.use(express.json()) ;
app.use(express.urlencoded({extended:true })) ;


// mongodb connection and server start
mongoose.connect(MONGO_URL).then(()=>{
    console.log("mongodb is connected successfully:") ;
    app.listen(PORT ,()=>{
        console.log(`app is listening to the port ${PORT}`) ;
    })
})
.catch((err)=>{
    console.error("mongodb connection is failed , err") ;
})