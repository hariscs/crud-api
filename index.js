import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const PORT = 5000;

app.get('/', (req, res) => {
	res.send('<h1>Hi from Homepage</h1>');
});

app.listen(PORT, () => {
	console.log('server is running');
});
