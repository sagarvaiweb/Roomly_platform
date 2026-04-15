const Review = require("../Models/ReviewModel") ;
const Listing = require("../Models/ListingModel") ; 


module.exports.createReview = async(req , res)=>{
    let {id} = req.params ;
    const listing = await Listing.findById(id) ;
    const newReview = new Review(req.body) ;

    listing.reviews.push(newReview) ;
    await newReview.save() ;
    await listing.save() ;

    res.status(200).json({
        success:true,
        message:"Review added successfully"
    }) ;
} ;
