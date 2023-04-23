const mongoose = require('mongoose');

const Key = new mongoose.Schema({
  title: {type: String, default: ''},
  expiration: {type: Date, required: true, nullable: true},
});

module.exports = mongoose.model('Key', Key);
