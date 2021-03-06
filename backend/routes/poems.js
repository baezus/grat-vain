const { Poem } = require('../models/poem');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


router.get('/', async (req, res) => {
  const poemList = await Poem.find().populate('writer', 'title');
  if (!poemList) {
    res.status(500).json({success: false});
  }
  res.send(poemList);
});

router.get(`/:id`, async (req, res) => {
  const poem = await Poem.findById(req.params.id).populate('title');
  if (!poem) {
    return res.status(500).send('Poem was not found.');
  }
  return res.status(200).send(poem);
});

router.post(`/`, async (req, res) => {
  const addedPoem = new Poem ({
    title: req.body.title,
    writer: req.body.writer,
    firstLine: req.body.firstLine,
    editsWanted: req.body.editsWanted,
    tags: req.body.tags,
    poemUrl: req.body.poemUrl,
    updatedAt: req.body.updatedAt,
    isOriginal: req.body.isOriginal,
    isFeatured: req.body.isFeatured
  });
  poem = await addedPoem.save();
  if (!poem) {
    return res.status(500).send('Poem not created.');
  }
  return res.status(200).send(poem);
});

router.put(`/:id`, async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).send('Invalid poem ID.');
  };
  const poem = await Poem.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      writer: req.body.writer,
      firstLine: req.body.firstLine,
      editsWanted: req.body.editsWanted,
      tags: req.body.tags,
      poemUrl: req.body.poemUrl,
      updatedAt: req.body.updatedAt,
      isOriginal: req.body.isOriginal,
      isFeatured: req.body.isFeatured
    },
    {new: true}
  )
  if (!poem) {
    return res.status(500).send('The poem could not be updated.');
  }
  res.send(poem);
});

router.delete('/:id', (req, res) => {
  Poem.findByIdAndRemove(req.params.id).then(poem => {
    if (poem) {
      return res.status(200).json({success: true, message: 'The poem is deleted.'}); 
    } else {
      return res.status(404).json({success: false, message: 'The poem was not found.'});
    }
  }).catch(err => {
    return res.status(400).json({ success: false, error: err}
    )
  })
});

router.get('/get/count', async(req,res) => {
  const poemCount = await Poem.countDocuments((count) => count);
  if (!poemCount) {
    res.status(500).json({success: false});
  }
  res.send({
    count: poemCount
  });
});

module.exports = router;