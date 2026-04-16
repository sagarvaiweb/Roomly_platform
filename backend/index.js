// configuration
require('dotenv').config() ;

// Imports
const express = require("express") ;
const mongoose = require("mongoose") ;
const cors = require("cors") ;
const ExpressError = require("./utils/ExpressError") ;
const listingRouter = require("./routes/listingRouter") ;
const reviewRouter = require("./routes/reviewRouter") ;
const authRouter = require("./routes/userRouter") ;

// app initialization and variables
const app = express() ;
const PORT = process.env.PORT || 3000 ;
const MONGO_URL = process.env.MONGO_URL ;


// Middlewares
app.use(cors()) ;
app.use(express.json()) ;
app.use(express.urlencoded({extended:true })) ;

// Routes
app.use("/listings" , listingRouter) ;
app.use("/listings/:id/reviews" , reviewRouter ) ;
app.use("/auth" , authRouter ) ;

// 404 handler
app.use((req , res , next)=>{
    next(new ExpressError(404 , "Page not found:")) ;
})

// Error handling middleware
app.use((err , req , res , next)=>{
    let {statusCode = 500 , message = "something went wrong!"} = err ;
    res.status(statusCode).json({
        success : false ,
        message : message 
    }) ;
})

// mongodb connection and server start
mongoose.connect(MONGO_URL).then(()=>{
    console.log("mongodb is connected successfully:") ;
    app.listen(PORT ,()=>{
        console.log(`app is listening to the port ${PORT}`) ;
    })
})
.catch((err)=>{
    console.error("mongodb connection is failed" ,err) ;
})