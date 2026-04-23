const express = require("express") ;
const router = express.Router({mergeParams:true}) ;
const wrapAsync = require("../utils/wrapAsync");
const authControllers = require("../controllers/userController") ;
const { validateSignUp, validateProfileUpdate, isLoggedIn } = require("../middleware");

// SignUp route
router.post("/signup" , validateSignUp , wrapAsync( authControllers.signUp )) ;

// Login route
router.post("/login" , wrapAsync( authControllers.login )) ;

// Profile update route
router.put("/update" , isLoggedIn, validateProfileUpdate, wrapAsync( authControllers.updateProfile )) ;

// Profile get route
router.get("/profile" , isLoggedIn, wrapAsync( authControllers.getProfile )) ;

module.exports = router ;