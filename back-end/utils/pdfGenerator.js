const PDFDocument = require('pdfkit');
const fs = require('fs');

const generatePDF = async (data, outputPath) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    let output = fs.createWriteStream(outputPath);
    doc.pipe(output);

    // Add content to the PDF here
    doc.fontSize(12);
    doc.text('Case Report', { align: 'center' });
    doc.moveDown();
    doc.text(`Case ID: ${data.caseId}`, { align: 'left' });
    doc.text(`Subcontractor: ${data.subcontractor}`, { align: 'left' });
    doc.text(`Description: ${data.description}`, { align: 'left' });
    doc.moveDown();
    doc.text('Generated on: ' + new Date().toLocaleString());

    // Finalize the PDF and end the stream
    doc.end();
    output.on('finish', function() {
      resolve(outputPath);
    });

    output.on('error', function(err) {
      reject(err);
    });
  });
};

module.exports = {
  generatePDF
};
