const mongoose = require('mongoose');

const Subcontractor = mongoose.model(
  'Subcontractor',
  new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
  })
);

module.exports = Subcontractor;
