const Listing = require("../Models/ListingModel") ;
const ExpressError = require("../utils/ExpressError");

module.exports.index =  async (req , res)=>{
    let allListings = await Listing.find({ }) ;
    if(! allListings){
        throw new ExpressError(404 , "listings not found !") ;
    }

    res.status(200).json({
        success: true ,
        data: allListings 
    }) ;
} ;