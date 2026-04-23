const express = require("express") ;
const router = express.Router({mergeParams:true}) ;
const wrapAsync = require("../utils/wrapAsync") ; 
const listingControllers = require("../controllers/listingController") ;
const { isLoggedIn, validateListing, validateUpdateListing, isListingOwner } = require("../middleware");



// index route
router.get("/" , wrapAsync( listingControllers.index ) ) ;

// MyListing route
router.get("/me" , isLoggedIn, wrapAsync( listingControllers.myListing )) ;

// showListing route
router.get("/:id" , wrapAsync( listingControllers.showListing )) ;

// createListing route
router.post("/create" , isLoggedIn, validateListing, wrapAsync( listingControllers.createListing )) ;

// updateListing route
router.put("/:id/update" , isLoggedIn, isListingOwner, validateUpdateListing, wrapAsync( listingControllers.updateListing )) ;

// destroyListing route
router.delete("/:id" , isLoggedIn, isListingOwner, wrapAsync( listingControllers.destroyListing )) ;
   
module.exports = router ;
   