var express = require('express');
var request = require('request');
var app = express();

var port = process.env.PORT || 3000;

app.get('/ping', function(req, res) {
    res.send('pong');
});

app.get('/get', function (req, res) {
  let url = req.query.url;
  request({url}, function(error, response, body) {
      res.send(body);
  });
});

app.listen(port, function () {
  console.log('Ejemplo del curso corriendo en puerto ' + port);
});
