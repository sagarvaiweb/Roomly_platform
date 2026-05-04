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

module.exports.myListing = async(req , res)=>{
    const id = req.user.id ;
    const myListings = await Listing.find({owner:id}).populate({ path:"reviews" , populate:{path:"owner"} }) ;

    if(myListings.length === 0){
        return res.status(200).json({
            success:true,
            message:"you haven't created any listings yet",
            data:[]
        }) ;
    }

    res.status(200).json({
        success:true,
        data:myListings
    }) ;
} ;

module.exports.showListing = async(req ,res)=>{
     let {id} = req.params ;
     const listing = await Listing.findById(id).populate("owner").populate({path:"reviews" , populate:{path:"owner"}}) ;

     if(!listing){
        throw new ExpressError(404 , "listing not found in database !") ;
     }

     res.status(200).json({
        success: true ,
        data : listing
     }) ;
} ;

module.exports.createListing = async(req , res)=>{

   const {title, description, price, city , location, country} = req.body ;
   let url ;
   let filename ;

    if(req.file){

         url = req.file.path ;
         filename = req.file.filename ;
    }
    else if(req.body.image && typeof req.body.image === "string"){
         url = req.body.image;
         filename = "roomly_image" ;
    }
    else{
        throw new ExpressError(400 , "provide image for your listing") ;
    }

    const newListing = new Listing({
        title,
        description,
        price,
        city,
        location,
        country,
        owner: req.user.id,
        image: {url , filename},
    }) ;
   

    const createdListing = await newListing.save() ;

    res.status(200).json({
        success:true ,
        message:"listing created successfully",
        data:createdListing
    }) ;
} ;

module.exports.updateListing = async(req , res)=>{
    
    let {id} = req.params ;
    let { image , ...otherUpdates } = req.body ;

    let updateData = {...otherUpdates} ;
    
    if(typeof req.file !== "undefined"){
        
        updateData.image = { url: req.file.path , filename: req.file.filename } ;
        
    }
    else if (image && typeof image === "string") {
        updateData.image = { url: image, filename: "manual_link" };
     
    }
    
    const listing = await Listing.findByIdAndUpdate( id , updateData , {returnDocument: 'after' , runValidators:true}) ;
    
    if(! listing){
        throw new ExpressError(404 , "Listing not found in database to update") ;
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