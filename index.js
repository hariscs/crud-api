import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';
const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);

const PORT = 5000;

app.get('/', (req, res) => {
	res.send('<h1>Hi from Homepage</h1>');
});

app.listen(PORT, () => {
	console.log('server is running');
});
