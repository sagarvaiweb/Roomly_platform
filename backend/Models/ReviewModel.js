 const {mongoose , Schema} = require("mongoose") ;

 const reviewSchema = new Schema({
    comment:{
        type:String ,
        minlength: 5,
        maxlength: 100,
        required:true
    } ,
    rating:{
        type:Number,
        min:1,
        max:5
    } ,
    owner:{
        type:Schema.Types.ObjectId ,
        ref:"User"
    }
 } , {timestamps:{createdAt:true , updatedAt:false}}  // it will contain createdAt but not Updated field
)  ;

 const Review = mongoose.model("Review" , reviewSchema) ;

 module.exports = Review ;