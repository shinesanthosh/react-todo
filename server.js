const express = require('express');
const pdb = require('pseudodb');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// pdb.createDb('todo');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/add', (req, res) => {
	console.log(req.body);
	pdb.addDoc('todo', req.body);
	res.sendStatus(200);
});

app.get('/data', (req, res) => {
	const data = pdb.getDb('todo');
	res.send(data);
});

app.post('/delete', (req, res) => {
	const data = req.body.id;
	pdb.deleteDoc('todo', data);
	res.sendStatus(200);
});

app.use((req, res) => {
	res.sendStatus(404);
});

app.listen(1234);
