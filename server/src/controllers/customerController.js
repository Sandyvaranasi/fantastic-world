const productModel = require('../models/productModel');
const offerModel = require('../models/offerModel');

const getProducts = async (req,res) =>{
    try{
        const category = req.params;

        const products = await productModel.find(category);
        res.json({data:products})

    }catch(err){
        res.status(500).send({message:err.message})
    }
}

const getOffer = async (req,res) =>{
    try{
        const offer = await offerModel.findOne();

        res.json(offer);

    }catch(err){
        res.status(500).send({message:err.message})
    }
}


module.exports = {getProducts, getOffer};