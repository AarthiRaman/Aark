import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Document from '../pages/Document';

const app = express();

app.get('/', (req, res) => {
	const renderedHTML = renderToString(<Document/>);
	res.send(`<!DOCTYPE HTML><html><head></head><body><div id="root">${renderedHTML}</div><script src="/index.js"></script></body></html>`);
});

app.use(express.static('dist'));

app.listen(8000, () => {
});