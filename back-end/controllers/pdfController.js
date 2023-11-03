const PDFService = require('../services/pdfService');

exports.generatePDF = async (req, res) => {
  try {
    const { data } = req.body; // Assuming the data for PDF generation is sent in request body
    const pdf = await PDFService.generatePDF(data);
    res.contentType("application/pdf");
    res.send(pdf);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
const { generatePDF } = require('../utils/pdfGenerator');

exports.generateCaseReport = async (req, res) => {
  try {
    const caseData = req.body; // You should validate and sanitize this data
    const outputPath = 'path/to/output/folder/caseReport.pdf';

    await generatePDF(caseData, outputPath);

    res.download(outputPath);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.downloadPDF = async (req, res) => {
  try {
    const { data } = req.body;
    const pdf = await PDFService.generatePDF(data);
    res.contentType("application/pdf");
    res.header('Content-Disposition', 'attachment; filename=report.pdf');
    res.send(pdf);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
