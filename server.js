var express = require('express');
var app = express();
var appJS = require('./modules/app.js');
var balanceJS = require('./modules/balance.js');
var random = require('./modules/random.js');
var usd= require('./modules/usd.js');
var port = 3000;


var path = require('path');
// app.get('/', function(req, res, next){
//   res.sendFile(path.join(__dirname, '/public/index.html'));
// });
app.use(express.static('public'));




app.get('/balance', function(req, res){
  var info = balanceJS.words();
  res.send(info);
});

app.listen(3000, function(){
  console.log("We are up and running on port:", 3000);
});
