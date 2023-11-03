const mongoose = require('mongoose');

const Case = mongoose.model(
  'Case',
  new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subcontractor',
    },
  })
);

module.exports = Case;
