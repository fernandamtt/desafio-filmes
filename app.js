const route = require('./routes');
const express = require('express');
const api = require('./config/parseServer');
const app = express();
const multipart = require('connect-multiparty');

app.use('/parse',api);
app.use(express.json());
app.use(multipart({uploadDir:'./img'}));
app.use(route);
 

module.exports = app;