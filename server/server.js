// NodeJS Express web server
const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname, '..', 'public');

// Define the server
const app = express();
app.use(express.static(publicPath));

// Force all requests to go to the index.html page. React will take care of the routing from there.
app.get('*', (request, response) => {
    response.sendFile(path.join(publicPath, 'index.html'));
});

// Launch the server
// -> node server/server.js
app.listen(3000, () => {
    console.log('Server is up!');
});