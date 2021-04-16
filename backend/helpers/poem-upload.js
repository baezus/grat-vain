const { Poem } = require('../models/poem');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const PoemUpload = async (file) => {

  let workFile = file;
  let poemTitle = file.originalname.split('.');
  poemTitle = poemTitle[0];

  console.log('reached poem upload helper');
  const addedPoem = new Poem ({
    title: poemTitle,
    writer: 'uploader',
    firstLine: 'first line',
    editsWanted: 0,
    tags: 'tags',
    poemUrl: file.path,
    isOriginal: true,
    isFeatured: true
  });
  poem = await addedPoem.save();
  if (!poem) {
    return console.log('Poem not created.');
  }
  return console.log('we added: ', poem);

}

module.exports = PoemUpload;