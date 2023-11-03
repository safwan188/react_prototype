const db = require("../models");
const Subcontractor = db.subcontractor;

exports.getAllSubcontractors = async () => {
  try {
    const subcontractors = await Subcontractor.find();
    return subcontractors;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getSubcontractorById = async (subcontractorId) => {
  try {
    const subcontractor = await Subcontractor.findById(subcontractorId);
    if (!subcontractor) {
      throw new Error('Subcontractor not found!');
    }
    return subcontractor;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.createSubcontractor = async (subcontractorData) => {
  try {
    const newSubcontractor = new Subcontractor(subcontractorData);
    await newSubcontractor.save();
    return newSubcontractor;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateSubcontractor = async (subcontractorId, updateData) => {
  try {
    const updatedSubcontractor = await Subcontractor.findByIdAndUpdate(subcontractorId, updateData, { new: true });
    if (!updatedSubcontractor) {
      throw new Error('Subcontractor not found!');
    }
    return updatedSubcontractor;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.deleteSubcontractor = async (subcontractorId) => {
  try {
    const deletedSubcontractor = await Subcontractor.findByIdAndRemove(subcontractorId);
    if (!deletedSubcontractor) {
      throw new Error('Subcontractor not found!');
    }
    return deletedSubcontractor;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.assignCase = async (subcontractorId, caseId) => {
  try {
    const subcontractor = await Subcontractor.findById(subcontractorId);
    if (!subcontractor) {
      throw new Error('Subcontractor not found!');
    }
    subcontractor.assignedCases.push(caseId);
    await subcontractor.save();
    return subcontractor;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.removeCaseAssignment = async (subcontractorId, caseId) => {
  try {
    const subcontractor = await Subcontractor.findById(subcontractorId);
    if (!subcontractor) {
      throw new Error('Subcontractor not found!');
    }
    subcontractor.assignedCases = subcontractor.assignedCases.filter(assignedCase => assignedCase.toString() !== caseId);
    await subcontractor.save();
    return subcontractor;
  } catch (error) {
    throw new Error(error.message);
  }
};
