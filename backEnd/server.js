var express = require('express');
var server = express();
var db = require('./db');

server.get('/save',function(req,res){
    var post  = {from:'me', to:'you', msg:'hi'};
    db.query('INSERT INTO messages SET ?', post, function(err, result) {
      if (err) throw err;
    });
});

server.listen(8080);



var express = require('express'); 
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
     host: 'localhost',
     user: '',
     password: '',
     database: 'copedb'
});
connection.connect();

app.post('/api/book', function(req, res, next){
   var cope = req.body.params;
   var query = connection.query('insert into cope set ?', cope, function(err, result) {
     if (err) {
       console.error(err);
       return res.send(err);
     } else {
       return res.send('Ok');
     }
});
});
app.listen(8080);