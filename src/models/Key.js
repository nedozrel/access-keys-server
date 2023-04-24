const mongoose = require('mongoose');

const Key = new mongoose.Schema({
  title: {type: String, default: ''},
  expiration: {type: Date, required: true},
});

Key.virtual('expired').get(function () { // Can't use arrow func because it has no context
  return !!this.expiration && Date.now() >= this.expiration.getTime();
});

Key.set('toJSON', {virtuals: true})

module.exports = mongoose.model('Key', Key);
