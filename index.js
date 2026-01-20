const express = require('express');
const app = express();

// Use PORT from environment variable or fallback to 8080
const PORT = process.env.PORT || 8080;

// Read AWS region from environment variable or use 'local' as fallback
const REGION = process.env.AWS_REGION || 'local';

// Simple route at root
app.get('/', (req, res) => {
    res.send(`Hello from ${REGION}!`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`AWS Region: ${REGION}`);
});
