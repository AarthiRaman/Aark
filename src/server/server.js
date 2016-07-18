import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Container from '../Components/Container';
import Document from '../Components/Document'; 

const app = express();

app.get('/', (req, res) => {
	const renderedHTML = renderToString(<Container names={["steve", "aarthi", "steve", "subash", "bill"]}/>);
	res.send(`<!DOCTYPE HTML><html><head></head><body><div id="root">${renderedHTML}</div><script src="/index.js"></script></body></html>`);
});

app.get('/aark', (req, res) => {
	const renderedHTML = '<!DOCTYPE HTML/>' + renderToString(<Document/>);
	res.send(renderedHTML);
	});

app.use(express.static('dist'));

app.listen(8000, () => {
	console.log('port 8000!');
});