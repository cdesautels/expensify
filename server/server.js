// NodeJS Express web server
const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname, '..', 'public');
// Set the port to Hiroku's dyanmic port assignment, or use 3000 for localhost
const port = process.env.PORT || 3000;

// Define the server
const app = express();
app.use(express.static(publicPath));

// Force all requests to go to the index.html page. React will take care of the routing from there.
app.get('*', (request, response) => {
    response.sendFile(path.join(publicPath, 'index.html'));
});

// Launch the server
// -> node server/server.js
app.listen(port, () => {
    console.log('Server is up!');
});