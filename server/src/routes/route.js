const express = require('express')

const router = express.Router();

const {getProducts, getOffer} = require('../controllers/customerController');
const {addOffer, addProduct} = require('../controllers/adminController');
const { uploadImage } = require('../middlewares/uploadImage');

router.get('/test',(req,res)=>res.send('ok'));

 router.post('/product/:category', uploadImage.single('productImage'), addProduct);
 router.get('/product/:category', getProducts);

 router.post('/offer', uploadImage.single('offerImage') , addOffer);
 router.get('/offer', getOffer);



module.exports = router