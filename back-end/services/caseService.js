const db = require("../models");
const Case = db.case;

exports.getAllCases = async () => {
  try {
    const cases = await Case.find();
    return cases;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCaseById = async (caseId) => {
  try {
    const caseItem = await Case.findById(caseId);
    if (!caseItem) {
      throw new Error('Case not found!');
    }
    return caseItem;
  } catch (error) {
    throw new Error(error);
  }
};

exports.createCase = async (caseData) => {
  try {
    const newCase = new Case(caseData);
    await newCase.save();
    return newCase;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateCase = async (caseId, updateData) => {
  try {
    const updatedCase = await Case.findByIdAndUpdate(caseId, updateData, { new: true });
    if (!updatedCase) {
      throw new Error('Case not found!');
    }
    return updatedCase;
  } catch (error) {
    throw new Error(error);
  }
};

exports.deleteCase = async (caseId) => {
  try {
    const deletedCase = await Case.findByIdAndRemove(caseId);
    if (!deletedCase) {
      throw new Error('Case not found!');
    }
    return deletedCase;
  } catch (error) {
    throw new Error(error);
  }
};
