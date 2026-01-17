const express = require('express');
const app = express();

// Use PORT from environment variable or fallback to 8080
const PORT = process.env.PORT || 8080;

// Simple route at root
app.get('/', (req, res) => {
    res.send('Hello from AWS!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
