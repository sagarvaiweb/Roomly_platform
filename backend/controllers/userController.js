const User = require("../Models/UserModel") ;
const bcrypt = require("bcryptjs") ;
const jwt = require("jsonwebtoken") ;
const ExpressError = require("../utils/ExpressError");


module.exports.signUp = async(req , res)=>{
    const { username , email , password } = req.body ;

    const existingUser = await User.findOne({email}) ;
    if(existingUser){
        throw new ExpressError(409 , "User already exists") ;
    }

    const hashedPassword = await bcrypt.hash(password , 10) ;

    const newUser = new User({username , email , password:hashedPassword}) ;
    await newUser.save() ;

    res.status(201).json({
        success:true,
        message:"User Registered successfully" 
    }) ;
} ;


module.exports.login = async(req , res)=>{
    const { email , password } = req.body ;

    const existingUser = await User.findOne({email}) ;

    if(!existingUser || !(await bcrypt.compare(password , existingUser.password))){
        throw new ExpressError(401 , "Invalid credentials") ;
    }

    const token = jwt.sign({id:existingUser._id} , process.env.JWT_SECRET , {expiresIn:"1h"}) ;
    res.status(200).json({
        token:token ,
        message:"Logged in successfully"
    }) ;
} ;

module.exports.updateProfile = async(req , res)=>{
    const id = req.user.id ;
    const { username , image } = req.body ;
    const updatedUser = await User.findByIdAndUpdate(id , {username , image} , {returnDocument:"after", runValidators:true}) ;

    if(!updatedUser){
        throw new ExpressError(404 , "User not found") ;
    }

    res.status(200).json({
        success:true,
        message:"Profile updated successfully",
        user:updatedUser
    }) ;
} ;

module.exports.getProfile = async(req , res)=>{
    const id = req.user.id ;
    const existingUser = await User.findById(id).select("-password") ;

    if(!existingUser){
       return res.status(404).json({
            success:false,
            message:"User not found",
        }) ;
    }

    res.status(200).json({
        success:true,
        message:"Profile data fetched successfully ",
        data:existingUser
    }) ;
} ;