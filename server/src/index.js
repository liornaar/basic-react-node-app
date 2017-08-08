import morgan from 'morgan';
import express from 'express';
import {MongoClient} from 'mongodb';
import bodyParser from 'body-parser';

import db from './config/db';

var app = express();

// Set up morgan to log requests
app.use(morgan('tiny'));

// If get to main path, then just say hi
app.get('/', (req, res) => {
	res.send('hello world');
});

// Set app to handle body as json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



MongoClient.connect(db.url, (err, database) => {
	if(err)
		console.log(err);
		return;

	// main entry point path for our api
	//app.use('/api', api(database));
	app.listen(3000, () => {
		console.log('started on port 3000');
	});
});

