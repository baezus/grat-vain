const { User } = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get(`/`, async (req, res) => {
  const userList = await User.find();
  if (!userList) {
    res.status(500).json({success: false})
  }
  res.status(201).send(userList);
});

router.post(`/`, async(req, res) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 7),
    rank: req.body.rank,
    display: req.body.display,
    honor: req.body.honor,
    poems: req.body.poems,
    bookmarks: req.body.bookmarks
  });

  user = await user.save();

  if (!user) {
    return res.status(404).send('User not created.');
  }
  res.status(201).send(user);
});

router.post('/login', async(req, res) => {
  const user = await User.findOne({email: req.body.email});
  const secret = process.env.secret;
  if (!user) {
    return res.status(400).send('User not found. Email address incorrect.');
  }

  if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
    const token = jwt.sign({
      userId=user.id,
      isAdmin: user.isAdmin
    },
    secret,
    {expiresIn: '1d'});

    res.status(200).send({user: user.email, token: token})
  } else {
    res.status(400).send('Wrong password.');
  }

  return res.send(user);
});

router.post('/register', async(req, res) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 7),
    rank: req.body.rank,
    display: req.body.display,
    honor: req.body.honor,
    poems: req.body.poems,
    bookmarks: req.body.bookmarks
  });
  user = await user.save();

  if (!user) {
    return res.status(400).send('Registration failed.');
  }

  res.send(user);
});

router.get('/get/count', async (req,res) => {
  const userCount = await User.countDocuments((count) => count);
  if (!userCount) {
    res.status(500).json({success: false})
  }
  res.send({
    count: userCount
  });
});

router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id).then(user => {
    if (user) {
      return res.status(200).json({success: true, message: 'User deleted.'});
    } else {
      return res.status(404).json({success: false, message: 'User not found; could not be deleted.'});
    }
  }).catch(err => {
    return res.status(400).json({success: false, error: err})
  });
});

module.exports = router;