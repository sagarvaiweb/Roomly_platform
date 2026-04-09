const Listing = require("../Models/ListingModel") ;
const ExpressError = require("../utils/ExpressError");

module.exports.index =  async (req , res)=>{
    let allListings = await Listing.find({ }) ;
    if(allListings.length === 0){
        throw new ExpressError(404 , "listings not found in database !") ;
    }

    res.status(200).json({
        success: true ,
        data: allListings 
    }) ;
} ;

module.exports.showListing = async(req ,res)=>{
     let {id} = req.params ;
     let listing = await Listing.findById(id) ;

     if(!listing){
        throw new ExpressError(404 , "listing not found in database !") ;
     }

     res.status(200).json({
        success: true ,
        data : listing
     }) ;
} ;