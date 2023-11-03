const db = require("../models");
const Customer = db.customer;

exports.createCustomer = async (customerData) => {
  try {
    const newCustomer = new Customer(customerData);
    await newCustomer.save();
    return newCustomer;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateCustomer = async (customerId, updateData) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(customerId, updateData, { new: true });
    if (!updatedCustomer) {
      throw new Error('Customer not found!');
    }
    return updatedCustomer;
  } catch (error) {
    throw new Error(error);
  }
};

exports.deleteCustomer = async (customerId) => {
  try {
    const deletedCustomer = await Customer.findByIdAndRemove(customerId);
    if (!deletedCustomer) {
      throw new Error('Customer not found!');
    }
    return deletedCustomer;
  } catch (error) {
    throw new Error(error);
  }
};
