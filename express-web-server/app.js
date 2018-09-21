const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req, res) {
	res.send('Hello World');
});

app.get('/about', (req, res) => {
	res.send('<h1>About</h1>');
});

app.get('/users/:name', (req, res) => { // :name specifies the parameter
	let user = req.params.name;
	res.send('<h1>' + user + '</h1>');
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function() {
	console.log('Server started on port 3000');
});
