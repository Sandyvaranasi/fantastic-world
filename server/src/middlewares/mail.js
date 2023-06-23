const nodemailer = require('nodemailer');
require('dotenv').config();


// Transporter creation ===>
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.SENDER_MAIL, 
    pass: process.env.SENDER_PASS 
  },
});
//==============================================

const sendMail =  (email)=>{
    try{
        //Generating OTP ===>
        const otp = Math.floor(Math.random() * 10000)
        //================================

// Reciever and content setting ===>
        const mailOptions = {
          from: process.env.SENDER_MAIL,
          to: email,
          subject: 'Verification',
          text: `Hello there! Thank You for using our service. Your OTP for this session is ${otp}`,
        };
        //========================================
        console.log(otp);
      
        // Mail sending ===>
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {

            return 'Error sending email '+ error;
          } else {

            return otp;
          }
        });
        //=======================================================

    }catch(err){
        res.status(500).json({message:err.message})
    }
}

module.exports = {sendMail};