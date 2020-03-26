const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leadSchema = new Schema({
  customername: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;