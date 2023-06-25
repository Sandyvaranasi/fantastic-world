const productModel = require('../models/productModel');
const offerModel = require('../models/offerModel');
const validators = require('../middlewares/validation')
const {sendMail} = require('../middlewares/mail')

let otp;

const matchPass = (req, res) =>{
  try{
    const pass = req.body.password;
    if(!pass) res.status(400).send({message:'Password is required'});

    if(pass!= process.env.ADMIN_PASS) res.status(401).send({message:'Incorrect Password'})

    else sendMail(process.env.RECIEVER_MAIL)
    .then((digit)=>{
      otp = digit;
    })
    .catch(err=>{
      throw(err)
    });

    res.json({data:'Success'});

  }catch(err){
    res.status(500).send({message:err.message})
  }
}

const adminLogin = (req,res) =>{
  try{
    const OTP = req.body.otp;
    if(OTP!=otp) return res.status(401).send({message:'Invalid OTP'});

    // else const token= jwt.sign()
 
    
  }catch(err){
    res.status(500).send({message:err.message});
  }
}

const addProduct = async (req,res) =>{
    try{
        const data = req.body;

        const { error, value } = validators.productValidationSchema.validate(data, {
            abortEarly: false,
          });
      
          if (error) {
            return res.status(400).send({ message: error.details[0].message });
          };

          data.category = req.params.category

          const product = await productModel.create(data);
          res.status(201).json({data:product})


    }catch(err){
        res.status(500).send({message:err.message});
    }
}

const addOffer = async (req,res) =>{
    try{
        const data = req.body;

        const { error, value } = validators.offerValidationSchema.validate(data, {
            abortEarly: false,
          });
      
          if (error) {
            return res.status(400).send({ message: error.details[0].message });
          };

          const offer = await offerModel.findOneAndReplace(data);
          res.status(201).json({data:offer})

    }catch(err){
        res.status(500).send({message:err.message});
    }
}

module.exports = {addOffer, addProduct, adminLogin, matchPass};