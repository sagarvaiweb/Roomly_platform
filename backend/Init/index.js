require('dotenv').config({ path: "../.env" }) ;

const mongoose = require("mongoose") ;
const initData = require("./data.js") ;
const Listing = require("../Models/ListingModel.js") ;


const MONGO_URL = process.env.MONGO_URL ;

 async function  main(){
    try{

        await mongoose.connect(MONGO_URL) ;
        console.log("mongodb is connected successfully:") ;

        await initDb() ;
        
        mongoose.connection.close() ;
        console.log("mongodb connection closed:") ;
    }
    catch(err){
        console.log("mongodb connectin failed:" , err) ;
    }
}


const initDb = async ()=>{
    await Listing.deleteMany({ }) ;
    await Listing.insertMany(initData.data) ;
    console.log("data initialized successfully:"); 
}

main() ;
