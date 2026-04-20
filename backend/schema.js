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

module.exports.reviewJoi = Joi.object({
    comment:Joi.string().required(),
    rating:Joi.number().min(1).max(5).required(),
}) ;