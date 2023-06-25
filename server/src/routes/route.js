const express = require('express')

const router = express.Router();

const {getProducts, getOffer} = require('../controllers/customerController');
const {addOffer, addProduct, adminLogin, matchPass} = require('../controllers/adminController');
const { uploadImage } = require('../middlewares/uploadImage');
const {authentication} = require('../middlewares/auth')

router.get('/test',(req,res)=>res.send('ok'));

 router.post('/admin/login', adminLogin);
 router.post('/admin/pass', matchPass);

 router.post('/product/:category', authentication, uploadImage.single('productImage'), addProduct);
 router.get('/product/:category', getProducts);

 router.post('/offer', authentication, uploadImage.single('offerImage') , addOffer);
 router.get('/offer', getOffer);



module.exports = router