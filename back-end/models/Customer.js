const mongoose = require('mongoose');

const Customer = mongoose.model(
  'Customer',
  new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    address: String,
  })
);

module.exports = Customer;
