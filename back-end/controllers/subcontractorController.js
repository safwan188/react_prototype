const mongoose = require('mongoose');
const Subcontractor = require('../models/Subcontractor');
const Case = require('../models/Case'); // Assuming you have a Case model

exports.getAllSubcontractors = async (req, res) => {
  try {
    const subcontractors = await Subcontractor.find();
    res.json(subcontractors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getSubcontractorById = async (req, res) => {
  try {
    const subcontractor = await Subcontractor.findById(req.params.id);
    if (!subcontractor) {
      return res.status(404).json({ msg: 'Subcontractor not found' });
    }
    res.json(subcontractor);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Subcontractor not found' });
    }
    res.status(500).send('Server Error');
  }
};

exports.createSubcontractor = async (req, res) => {
  try {
    const newSubcontractor = new Subcontractor(req.body);
    const subcontractor = await newSubcontractor.save();
    res.json(subcontractor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateSubcontractor = async (req, res) => {
  try {
    const subcontractor = await Subcontractor.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    if (!subcontractor) {
      return res.status(404).json({ msg: 'Subcontractor not found' });
    }
    res.json(subcontractor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteSubcontractor = async (req, res) => {
  try {
    const subcontractor = await Subcontractor.findByIdAndRemove(req.params.id);
    if (!subcontractor) {
      return res.status(404).json({ msg: 'Subcontractor not found' });
    }
    res.json({ msg: 'Subcontractor removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.assignCase = async (req, res) => {
  try {
    const { caseId } = req.body;
    const subcontractor = await Subcontractor.findById(req.params.id);
    if (!subcontractor) {
      return res.status(404).json({ msg: 'Subcontractor not found' });
    }

    const caseToUpdate = await Case.findById(caseId);
    if (!caseToUpdate) {
      return res.status(404).json({ msg: 'Case not found' });
    }

    // Here, you should update the case's subcontractor field (or however you've set it up)
    // For example:
    // caseToUpdate.subcontractor = subcontractor._id;
    // await caseToUpdate.save();

    res.json({ msg: 'Case assigned successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateSubcontractorCase = async (req, res) => {
  try {
    const { caseId, updates } = req.body;

    const subcontractor = await Subcontractor.findById(req.params.id);
    if (!subcontractor) {
      return res.status(404).json({ msg: 'Subcontractor not found' });
    }

    const caseToUpdate = await Case.findById(caseId);
    if (!caseToUpdate) {
      return res.status(404).json({ msg: 'Case not found' });
    }

    // Again, update the case as needed based on your application's requirements
    // For example:
    // Object.assign(caseToUpdate, updates);
    // await caseToUpdate.save();

    res.json({ msg: 'Subcontractor’s case updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
