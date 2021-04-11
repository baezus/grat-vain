const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  rank: {
    type: Number,
    default: 0
  },
  display: {
    type: String,
    required: true
  },
  honor: {
    type: Number,
    default: 0
  },
  poems: [{
    type: String,
    default: [''] 
  }],
  bookmarks: [{
    type: String,
    default: ['']
  }]
});

userSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

userSchema.set('toJSON', {
  virtuals: true,
});

exports.User = mongoose.model('User', userSchema);
exports.userSchema = userSchema;