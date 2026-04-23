const { listingJoi , reviewJoi, userSignupJoi, userProfileUpdateJoi, listingUpdateJoi } = require("./schema") ;
const Listing = require("./Models/ListingModel") ;
const Review = require("./Models/ReviewModel") ;
const ExpressError = require("./utils/ExpressError") ;
const wrapAsync = require("./utils/wrapAsync") ;
const jwt = require("jsonwebtoken") ;

 module.exports.isLoggedIn = wrapAsync(async(req , res , next)=>{
   const authHeader = req.headers.authorization ;
   const token = authHeader && authHeader.split(" ")[1] ;  

   if(!token){
     throw new ExpressError(401 , "Access denied , Login first") ;
   }

   try{
    const decodedPayLoad = jwt.verify(token , process.env.JWT_SECRET) ; 
    req.user = decodedPayLoad ;
    
    next() ;
   } catch(err){

    throw new ExpressError(403 , "Token is invalid or expired") ;    
   }
 }) ;


  
 module.exports.validateListing = (req , res , next)=>{
  const { error } = listingJoi.validate(req.body) ;

  if(error){
    const errMsg = error.details.map((el)=> el.message).join(",") ;
    throw new ExpressError(400 , errMsg) ;
  }

  next() ;
 } ;

 module.exports.validateUpdateListing = (req , res , next)=>{
   const {error} = listingUpdateJoi.validate(req.body) ;

   if(error){
    const errMsg = error.details.map((el)=> el.message).join(",") ;
    throw new ExpressError(400 , errMsg) ;
   }

   next() ;
 } ;


 module.exports.validateReview = (req , res , next)=>{
  const { error } = reviewJoi.validate(req.body) ;

  if(error){
    const errMsg = error.details.map((el)=> el.message).join(",") ;
    throw new ExpressError(400 , errMsg) ;
  }

  next() ;
 } ;



 module.exports.isListingOwner = wrapAsync(async(req , res , next)=>{
  const {id} = req.params ;
  const listing = await Listing.findById(id) ;

  if(! listing){
    throw new ExpressError(404 , "Listing not found") ;
  }

  if(! listing.owner.equals(req.user.id)){
    throw new ExpressError(403 , "you are not the author of this listing") ;
  }

  next() ;
}) ;


module.exports.isReviewOwner = wrapAsync(async(req , res , next)=>{
  const {id , reviewId} = req.params ;
  const review = await Review.findById(reviewId) ;

  if(! review){
    throw new ExpressError(404 , "review not found") ;
  }

  if(! review.owner.equals(req.user.id)){
    throw new ExpressError(403 , "you are not the author of this review") ;
  }

  next() ;
}) ;
 
module.exports.validateSignUp = (req , res , next)=>{
  const {error} = userSignupJoi.validate(req.body) ;

  if(error){
    const errMsg = error.details.map((el)=> el.message).join(",") ;
    throw new ExpressError(400 , errMsg) ;
  }
  
  next() ;
} ;

module.exports.validateProfileUpdate = (req , res , next)=>{
  const {error} = userProfileUpdateJoi.validate(req.body) ;

  if(error){
    const errMsg = error.details.map((el)=> el.message).join(",") ;
    throw new ExpressError(400 , errMsg) ;
  }

  next() ;
} ;

