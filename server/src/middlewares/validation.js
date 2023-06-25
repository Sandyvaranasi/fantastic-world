const joi = require('joi');

const productValidationSchema = joi.object({
    title: joi.string().required()
  });

  const offerValidationSchema = joi.object({
    title: joi.string().required(),
    price: joi.string().required(),
    offer: joi.string().required()
  });

  module.exports = {productValidationSchema, offerValidationSchema};