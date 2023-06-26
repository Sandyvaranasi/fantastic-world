const productModel = require('../models/productModel');
const offerModel = require('../models/offerModel');
const validators = require('../middlewares/validation');
const {sendMail} = require('../middlewares/mail');
const fs = require('fs');
const jwt = require('jsonwebtoken');

let otp;

const matchPass = (req, res) =>{
  try{
    const pass = req.body.password;
    if(!pass) return res.status(400).send({message:'Password is required'});

    if(pass!= process.env.ADMIN_PASS) return res.status(401).send({message:'Incorrect Password'})

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
};

const adminLogin = (req,res) =>{
  try{
    const OTP = req.body.otp;

    if(!OTP) return res.status(400).send({message:"OTP required"})

    if(OTP!=otp) return res.status(401).send({message:'Invalid OTP'});

    otp = undefined;

    const token= jwt.sign({role:'admin'},process.env.SECRET_STRING,{expiresIn:3600})

    res.json({data:token});
 
  }catch(err){
    res.status(500).send({message:err.message});
  }
};

const addProduct = async (req, res) => {
  try {
    const data = req.body;

    const { error, value } = validators.productValidationSchema.validate(data, {
      abortEarly: false,
    });

    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const product = new productModel({
      title: data.title,
      category: req.params.category,
      image:   await fs.promises.readFile('server/uploads/' + req.file.filename)
    });

    product
      .save()
      .then(result => {
        return res.status(201).json({ data: "Successfully uploaded" });
      })
      .catch(error => {
        return res.status(400).send({ message: error.message });
      });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};


const addOffer = async (req,res) =>{
    try{
        const data = req.body;

        const { error, value } = validators.offerValidationSchema.validate(data, {
            abortEarly: false,
          });
      
          if (error) {
            return res.status(400).send({ message: error.details[0].message });
          };

          data.image =  await fs.promises.readFile('server/uploads/' + req.file.filename);

          

          const offer =  await offerModel.findOneAndUpdate({},data,{new:true},{upsert:true});

          return res.status(201).json({data:offer});


    }catch(err){
        res.status(500).send({message:err.message});
    }
};

module.exports = {addOffer, addProduct, adminLogin, matchPass};