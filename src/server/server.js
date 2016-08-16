import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Container from '../Components/Container';
import Document from '../pages/Document';
import logger from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/home', (req, res) => {
const renderedHTML = '<!DOCTYPE HTML/>' + renderToString(<Document/>);
res.send(renderedHTML );
});

app.use(express.static('dist'));

app.listen(8000, () => {
	console.log('port 8000!');
});