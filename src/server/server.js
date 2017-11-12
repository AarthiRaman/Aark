import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
	//const renderedHTML = renderToString(<Document/>);
	res.sendFile(path.resolve(__dirname, '../../index.html'));
});

app.use(express.static('dist'));

app.listen(8000, () => {
});