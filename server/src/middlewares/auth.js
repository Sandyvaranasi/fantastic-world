const jwt = require('jsonwebtoken');

module.exports.authentication = async (req, res, next) => {
    try {
      let token = req.headers.authorization;
      if (!token) return res.status(401).json({ message: "Login first" });
  
      token = token.split(" ")[1];
  
      await jwt.verify(token, process.env.SECRET_STRING, (error, decodedToken) => {
        if (decodedToken) {
          next();
        } else return res.status(401).json({ message: error.message });
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };