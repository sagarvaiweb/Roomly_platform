const { listingJoi , reviewJoi } = require("./schema") ;
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
    let errMsg = error.details.map((el)=> el.message).join(",") ;
    throw new ExpressError(400 , errMsg) ;
  }

  next() ;
 } ;



