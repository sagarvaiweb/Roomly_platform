const Listing = require("../Models/ListingModel") ;
const ExpressError = require("../utils/ExpressError");

module.exports.index =  async (req , res)=>{
    const allListings = await Listing.find({ }) ;
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
     const listing = await Listing.findById(id) ;

     if(!listing){
        throw new ExpressError(404 , "listing not found in database !") ;
     }

     res.status(200).json({
        success: true ,
        data : listing
     }) ;
} ;

module.exports.createListing = async(req , res)=>{
    const newListing = new Listing(req.body.listing) ;
    await newListing.save() ;
    res.status(200).json({
        success:true ,
        message:"listing created successfully"
    }) ;
} ;

module.exports.updateListing = async(req , res)=>{
    let {id} = req.params ;
    const listing = await Listing.findByIdAndUpdate( id , {...req.body} , {returnDocument: 'after' , runValidators:true}) ;

    if(! listing){
        throw new ExpressError(404 , "Listing not found in database to update") ;
    }

    if(typeof req.file !== "undefined"){
        let url = req.file.path ;
        let filename = req.file.filename ;

        listing.image = { url , filename } ;
        await listing.save() ;
    }

    res.status(200).json({
        success:true ,
        message:"listing updated successfully" ,
        data:listing 
    }) ;

} ;

module.exports.destroyListing = async(req , res)=>{
    let {id} = req.params ;
    const listing = await Listing.findByIdAndDelete(id) ;

    res.status(200).json({
        success:true,
        message:"Listing deleted successfully"
    }) ;
} ;