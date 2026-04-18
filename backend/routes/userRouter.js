const express = require("express") ;
const router = express.Router({mergeParams:true}) ;
const wrapAsync = require("../utils/wrapAsync");
const authControllers = require("../controllers/userController") ;

// SignUp route
router.post("/signup" , wrapAsync( authControllers.signUp )) ;

// Login route
router.post("/login" , wrapAsync( authControllers.login )) ;

// Profile update route
router.put("/update" , wrapAsync( authControllers.updateProfile )) ;

module.exports = router ;