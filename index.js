const express = require('express');
const path = require('path');
const app = express();

// Use PORT from environment variable or fallback to 8080
const PORT = process.env.PORT || 8080;

// Read AWS region from environment variable or use 'local' as fallback
const REGION = process.env.AWS_REGION || 'local';

// Add CORS headers to allow cross-origin requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Serve static files from public directory
app.use(express.static('public'));

// API route to get region info
app.get('/api/region', (req, res) => {
    res.send(`Hello from ${REGION}!`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`AWS Region: ${REGION}`);
});
