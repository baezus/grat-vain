const express = require('express');
const router = express.Router();
const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');
path.join(__dirname, 'example.pdf')
let filename = __dirname + '/public' + '/uploads/' + 'example.pdf';
let dataBuffer = fs.readFileSync(filename);



router.get('/', (req, res) => {
  pdf(dataBuffer).then(function(data) {
    console.log(data.info);
    console.log('page count: ', data.numpages);
    console.log(data.text);
    data = JSON.stringify(data);
    res.status(201).send(data);
  });
});

module.exports = router;