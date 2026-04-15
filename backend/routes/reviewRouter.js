const express = require("express") ;
const router = express.Router({mergeParams:true}) ;
const wrapAsync = require("../utils/wrapAsync") ; 
const reviewControllers = require("../controllers/reviewController") ;

// create Review route
router.post("/" , wrapAsync( reviewControllers.createReview )) ;

// destroy Review route
router.delete("/:reviewId" , wrapAsync( reviewControllers.destroyReview )) ;

module.exports = router ;