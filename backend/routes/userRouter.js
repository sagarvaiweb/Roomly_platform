const express = require("express") ;
const router = express.Router({mergeParams:true}) ;
const wrapAsync = require("../utils/wrapAsync");
const authControllers = require("../controllers/userController") ;

// SignUp route
router.post("/signup" , wrapAsync( authControllers.signUp )) ;

module.exports = router ;