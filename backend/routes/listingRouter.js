const express = require("express") ;
const router = express.Router({mergeParams:true}) ;
const wrapAsync = require("../utils/wrapAsync") ; 
const listingControllers = require("../controllers/listingController") ;



// index route
router.get("/" , wrapAsync( listingControllers.index ) ) ;

// showListing route
router.get("/:id" , wrapAsync( listingControllers.showListing )) ;

// createListing route
router.post("/create" , wrapAsync( listingControllers.createListing )) ;

module.exports = router ;
   