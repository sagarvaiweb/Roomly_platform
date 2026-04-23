const express = require("express") ;
const router = express.Router({mergeParams:true}) ;
const wrapAsync = require("../utils/wrapAsync") ; 
const reviewControllers = require("../controllers/reviewController") ;
const { isLoggedIn, validateReview, isReviewOwner } = require("../middleware");

// create Review route
router.post("/" , isLoggedIn, validateReview, wrapAsync( reviewControllers.createReview )) ;

// destroy Review route
router.delete("/:reviewId" , isLoggedIn, isReviewOwner, wrapAsync( reviewControllers.destroyReview )) ;

module.exports = router ;