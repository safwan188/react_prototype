const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const caseRoutes = require('./routes/caseRoutes'); // Import case routes
const customerRoutes = require('./routes/customerRoutes'); // Import customer routes
const subcontractorRoute= require('./routes/subcontractorRoutes'); // Import subcontractor routes
// Connect to MongoDB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
const corsOptions = {
    origin: 'http://localhost:3000', // replace with your frontend's URL
    credentials: true, // if your frontend needs to send cookies or authentication headers
};
  
app.use(cors(corsOptions));

// Use Case Routes
app.use('/api/cases', caseRoutes); // Set up case routes on a specific base URL
app.use('/api/subcontractors', subcontractorRoute); // Set up subcontractor routes on a specific base URL
// Use Customer Routes
app.use('/api/customers', customerRoutes); // Set up customer routes on a specific base URL
// Use Auth Routes
app.use('/api/auth', authRoutes);

const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
