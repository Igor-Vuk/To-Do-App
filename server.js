'use strict';

let bodyParser    = require('body-parser');
let cookieParser  = require('cookie-parser');

import express from 'express';
import routes from './api/router.js';

import indexRoute from './api/index.js';


const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

app.use(express.static('public'));
app.use('/api', routes);

app.use('*', indexRoute);

app.listen(3000, () => console.log('App is online on port 3000!'));
