var express = require('express');
var app = express();

var port = 2916;

app.set('view engine','pug');
app.set('views','./views');
app.use(express.static('public'));

app.get('/',function(req,res){
	res.render('index');
});

app.get('/KhoaCNTT',function(req,res){
	res.render('KhoaCNTT');
})

app.get('/HumanResources',function(req,res){
	res.render('HumanResources');
})
app.listen(port, function(){
	console.log('Server listening on port'+port);
})