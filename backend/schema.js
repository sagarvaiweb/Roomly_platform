const Joi = require("joi") ;

module.exports.listingJoi = Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    image:Joi.string(),
    price:Joi.number().min(0).required(),
    location:Joi.string().required(),
    city:Joi.string().required(),
    country:Joi.string().required(),
}) ;

module.exports.listingUpdateJoi = Joi.object({
    title:Joi.string(),
    description:Joi.string(),
    image:Joi.string(),
    price:Joi.number().min(0),
    location:Joi.string(),
    city:Joi.string(),
    country:Joi.string(),
}) ;

module.exports.reviewJoi = Joi.object({
    comment:Joi.string().required(),
    rating:Joi.number().min(1).max(5).required(),
}) ;

module.exports.userSignupJoi = Joi.object({
    username:Joi.string().required().min(3).max(30).trim(),
    email:Joi.string().email().required().lowercase().trim(),
    password:Joi.string().required().min(6),
}) ;

module.exports.userProfileUpdateJoi = Joi.object({
    username:Joi.string().min(3).max(30).trim(),
    bio:Joi.string().max(300).allow(" ", null),
    image:Joi.string().allow(" ", null),
}) ;