import express from 'express';
import path from 'path';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	if(req.path.indexOf('public') > 0) {
		res.sendFile(path.resolve(__dirname, req.path));
	} else {
		res.sendFile(path.resolve(__dirname, '../../index.html'));		
	}
});


app.listen(process.env.PORT || 5000);