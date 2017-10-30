const config = require('config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRouter = require('./api');

// 数据库连接
const db = config.db;
mongoose.connect(db);

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use('/api', apiRouter);

app.listen(config.port, function() {
  console.log('Express server listening on port ' + config.port);
});