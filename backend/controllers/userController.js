const User = require("../Models/UserModel") ;
const bcrypt = require("bcryptjs") ;
const ExpressError = require("../utils/ExpressError");


module.exports.signUp = async(req , res)=>{
    const { username , email , password } = req.body ;
    
    const existingUser = await User.findOne({email}) ;
    if(existingUser){
        throw new ExpressError(404 , "User with this email already exists")
    }

    const hashedPassword = await bcrypt.hash(password , 10) ;

    const newUser = new User({username , email , password:hashedPassword}) ;
    await newUser.save() ;

    res.status(201).json({
        success:true,
        message:"User Registered successfully" 
    }) ;
} ;

