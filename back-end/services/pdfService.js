const pdfGenerator = require("../utils/pdfGenerator");

exports.generatePdf = async (data) => {
  try {
    const pdfBuffer = pdfGenerator.createPdf(data);
    return pdfBuffer;
  } catch (error) {
    throw new Error(error);
  }
};
