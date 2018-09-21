const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.send('Hello World');
});

app.get('/about', (req, res) => {
	res.send('<h1>About</h1>');
});

app.get('/users', (req, res) => {
	let users = [
		{
			first_name: "John",
			last_name: "Doe",
			age: 34,
			gender: 'male'
		},
		{
			first_name: "Tom",
			last_name: "Jackson",
			age: 23,
			gender: 'male'
		},
		{
			first_name: "Tracy",
			last_name: "Smith",
			age: 38,
			gender: "female"
		}
	];

	res.json(users);
});

app.get('/users/:name', (req, res) => { // :name specifies the parameter
	let user = req.params.name;
	res.send('<h1>' + user + '</h1>');
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/download', (req, res) => {
	res.download(path.join(__dirname, '/download/arm_arm.pdf'));
});

app.get('/about', (req, res) => {
	res.redirect('/about.html');
});

app.post('/subscribe', (req, res) => {
	let name = req.body.name;
	let email = req.body.email;

	console.log(name + ' has subscribed with ' + email);
});

app.listen(3000, function() {
	console.log('Server started on port 3000');
});
