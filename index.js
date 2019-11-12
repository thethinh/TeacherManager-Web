var express = require('express');
var app = express();
var path = require('path');

var port = 3000;

app.set('view engine','pug');
app.set('views','./views');
app.use(express.static('public'));

app.get('/',function(req,res){
	res.render('index');
});

app.get('/KhoaCNTT',function(req,res){
	res.render('KhoaCNTT');
})
app.listen(port, function(){
	console.log('Server listening on port'+port);
})