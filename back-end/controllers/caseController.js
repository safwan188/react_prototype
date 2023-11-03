const Case = require('../models/Case');

exports.getAllCases = async (req, res) => {
  try {
    const cases = await Case.find();
    res.json(cases);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getCaseById = async (req, res) => {
  try {
    const caseItem = await Case.findById(req.params.id);
    if (!caseItem) {
      return res.status(404).json({ msg: 'Case not found' });
    }
    res.json(caseItem);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Case not found' });
    }
    res.status(500).send('Server Error');
  }
};

exports.createCase = async (req, res) => {
  try {
    const newCase = new Case({
      // Add all the fields that you want to store
      ...req.body
    });
    const caseItem = await newCase.save();
    res.json(caseItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateCase = async (req, res) => {
  try {
    const caseItem = await Case.findById(req.params.id);
    if (!caseItem) {
      return res.status(404).json({ msg: 'Case not found' });
    }

    // Update each field with new data
    Object.keys(req.body).forEach((key) => {
      caseItem[key] = req.body[key];
    });

    await caseItem.save();
    res.json(caseItem);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Case not found' });
    }
    res.status(500).send('Server Error');
  }
};

exports.deleteCase = async (req, res) => {
  try {
    const caseItem = await Case.findById(req.params.id);
    if (!caseItem) {
      return res.status(404).json({ msg: 'Case not found' });
    }
    await caseItem.remove();
    res.json({ msg: 'Case removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Case not found' });
    }
    res.status(500).send('Server Error');
  }
};
