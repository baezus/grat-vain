const mongoose = require('mongoose');

const poemSchema = mongoose.Schema({

  title: {
    type: String,
    required: true
  },
  firstLine: {
    type: String,
    required: true
  },
  writer: {
    type: String,
    required: true
  },
  editsWanted: {
    type: Number, 
    default: 1 
  },
  editsHad: {
    type: Number,
    default: 0,
  },
  tags: [{
    type: String
  }],
  isOriginal: {
    type: Boolean,
    default: true
  },
  editedVersions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Poem',
  }],
  isFeatured: {
    type: Boolean,
    default: false
  },
  poemUrl: {
    type: String,
    default: ''
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
})

poemSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

poemSchema.set('toJSON', { 
  virtuals: true,
});

exports.Poem = mongoose.model('Poem', poemSchema);