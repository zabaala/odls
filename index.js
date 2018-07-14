const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;
const app = express();
const morgan = require('morgan');

// serve static assets normally
app.use(express.static(__dirname + '/docs'));
app.use(morgan('combined'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'docs', 'index.html'));
});

app.listen(port);
console.log("server started on port " + port);