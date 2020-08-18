const filmeController = require('./modules/filme/filmeController');
const express = require('express');
const route = express.Router();

route.post('/movie', filmeController.create);

route.get('/movie', filmeController.find);

route.post('/movie/filter', filmeController.findFilter);



module.exports = route;