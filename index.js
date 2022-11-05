// npm install express
var express = require('express');
var app = express();

// set port, listen for requests
const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//http://localhost:8080
app.get('/', function (req, res) {
       res.send('<h1>Hello World for 2011CS010123</h1>');
})