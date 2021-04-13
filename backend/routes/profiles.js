const express = require('express');
const router = express.Router();
const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');
path.join(__dirname, 'example.pdf')
let filename = __dirname + '/public' + '/uploads/' + 'example.pdf';
let dataBuffer = fs.readFileSync(filename);

//multer
const multer = require('multer');
let filter = {};

const FILE_TYPE_MAP = {
  'application/pdf': 'pdf',
}

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error('invalid file type');
    if (isValid) {
      uploadError = null;
    }
    cb(null, 'public/')
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname)
  }
})

const upload = multer({ storage: storage });

router.get('/', (req, res) => {
  pdf(dataBuffer).then(function(data) {
    console.log(data.info);
    console.log('page count: ', data.numpages);
    console.log(data.text);
    data = JSON.stringify(data);
    res.status(201).send(data);
  });
});

router.post('/pdf/upload', upload.single("file"), (req, res) => {
  let file = req.file;
  console.log('reached the right route');
  console.log('file: ', req.file)
  return res.send(req.file);
  if (file) {
    return res.send("Single file")
    upload (req, res, function(err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err);
      } else if (err) {
        return res.status(500).json(err);
      }
      console.log('success: ', req.file);
    return res.status(200).send(file);
  })};
})

module.exports = router;