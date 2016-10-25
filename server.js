// Enviroment - It using browserHistory on app.js
var express = require('express');

//-----------------------------
var path = require('path');
const PORT = process.env.PORT || 3000;
var app = express();

app.use(function(req, res, next){
	if(req.headers['x-forwarded-proto'] === 'https'){
		res.redirect('http://' + req.hostname + req.url);
	}else{
		next();
	}
})
// serve static assets normally
app.use(express.static(__dirname + '/public'))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(PORT);
console.log("server started on port " + PORT);
//-----------------------------




// Enviroment - It using hashHistory on app.js
/*
var express = require('express');
var app =  express();

app.use(express.static('public'));

app.listen(3000, function(){
	console.log('Express server is up on port 3000');
});*/