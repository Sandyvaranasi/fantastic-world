const express = require('express')

const router = express.Router();

const {getProducts, getOffer} = require('../controllers/customerController');
const {addOffer, addProduct} = require('../controllers/adminController');

router.get('/test',(req,res)=>res.send('ok'));

 router.post('/product/:category', addProduct);
 router.get('/product/:category', getProducts);

 router.post('/offer', addOffer);
 router.get('/offer', getOffer);



module.exports = router