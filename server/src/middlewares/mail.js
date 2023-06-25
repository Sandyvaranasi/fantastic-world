const nodemailer = require("nodemailer");
require("dotenv").config();

// Transporter creation ===>
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.SENDER_MAIL,
    pass: process.env.SENDER_PASS,
  },
});
//==============================================

const sendMail = (email) => {
  return new Promise((resolve, reject) => {
    try {
      //Generating OTP ===>
      const otp = Math.floor(Math.random() * 10000);
      //================================

      // Reciever and content setting ===>
      const mailOptions = {
        from: process.env.SENDER_MAIL,
        to: email,
        subject: "Verification",
        text: `Hello there! Thank You for using our service. Your OTP for this session is ${otp}`,
      };
      //========================================

      // Mail sending ===>
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(otp);
        }
      });
      //=======================================================
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { sendMail };
