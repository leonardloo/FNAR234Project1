var express = require('express');
var app = express();
var name = "";
var gender = "";

// List of emails
var emails = [
'https://newhive.com/artoftheweb', 
'https://newhive.com/artoftheweb/angry-3', 
'https://newhive.com/artoftheweb/wall-street',
'https://newhive.com/artoftheweb/home',
'https://newhive.com/artoftheweb/cafe-angry',
'https://newhive.com/artoftheweb/church',
'https://newhive.com/artoftheweb/sad-lake',
'https://newhive.com/artoftheweb/happy-1',
'https://newhive.com/artoftheweb/mountain-sad', 
];

var getRandomEmail = function() {
	return emails[Math.floor(Math.random() * emails.length)];
}

app.get('/', function (req, res) {
  res.render('name.ejs');
});

app.get('/home', function(req, res) {
	res.render('home.ejs', {name: name, email: getRandomEmail()});
});

app.get('/cafe', function(req, res) {
	res.render('cafe.ejs', {name: name, email: getRandomEmail()});
});

app.get('/church', function(req, res) {
	res.render('church.ejs', {name: name, email: getRandomEmail()});
});

app.get('/eveninglake', function(req, res) {
	res.render('eveninglake.ejs', {name: name, email: getRandomEmail()});
});

app.get('/graveyard', function(req, res) {
	res.render('graveyard.ejs', {name: name, email: getRandomEmail()});
});

app.get('/mall', function(req, res) {
	res.render('mall.ejs', {name: name, gender: gender, email: getRandomEmail()});
});

app.get('/mountains', function(req, res) {
	res.render('mountains.ejs', {name: name, email: getRandomEmail()});
});

app.get('/school', function(req, res) {
	res.render('school.ejs', {name: name, email: getRandomEmail()});
});

app.get('/sea', function(req, res) {
	res.render('sea.ejs', {name: name, email: getRandomEmail()});
});

app.get('/wallstreet', function(req, res) {
	res.render('wallstreet.ejs', {name: name, email: getRandomEmail()});
});

app.get('/submitname', function(req, res) {
	name = req.query.name;
	gender = req.query.gender.toLowerCase();
	console.log(name);
	res.json({success: true});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

