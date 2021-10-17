const multer = require('multer');

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
};

const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type!");
    if(isValid){
      error = null;
    }
    callBack(error, "backend/images");
  },
  filename: (req, file, callBack) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    callBack(null, name + '-' + Date.now() + '.' + ext);
  }
});

module.exports = multer({storage: storage}).single('image');
