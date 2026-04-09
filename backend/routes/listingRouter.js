const express = require("express") ;
const router = express.Router({mergeParams:true}) ;
const wrapAsync = require("../utils/wrapAsync") ; 
const listingControllers = require("../controllers/listingController") ;



// index route
router.get("/" , wrapAsync( listingControllers.index ) ) ;

module.exports = router ;
   