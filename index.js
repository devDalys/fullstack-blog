import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose
	.connect('mongodb+srv://admin:Pa-196576@cluster0.fq3jjhg.mongodb.net/?retryWrites=true&w=majority')
	.then(() => {
		console.log('DB ok');
	})
	.catch(err => console.log('DB error:', err));

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello world');
});

app.post('/login', (req, res) => {
	const token = jwt.sign(
		{
			email: req.body.email,
			fullName: 'Вас пупкин'
		},
		'secret123'
	);
	res.json({
		success: true,
		token
	});
});

app.listen(4444, err => {
	if (err) {
		return console.log(err);
	}
	console.log('Server OK');
});
