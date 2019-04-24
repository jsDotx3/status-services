const express = require('express');
const logger = require('morgan');
const app = express();
const routes = require(`./src/http/route`);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(routes.path,routes.router);
module.exports = app;
