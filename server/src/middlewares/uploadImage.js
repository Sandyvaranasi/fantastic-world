const multer = require('multer');

const storageEngine = multer.diskStorage({
    destination : (req,file,callBack)=>{
        callBack(null,'server/uploads')
        
    },
    filename: (req,file,callBack)=>{
        callBack(null,file.originalname)
    }

})

module.exports.uploadImage = multer({storage:storageEngine})

