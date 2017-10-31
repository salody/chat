const path = require('path');
const config = require('config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const formidable = require('express-formidable');
const apiRouter = require('./api');

// 数据库连接
const db = config.db;
mongoose.connect(db);

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// session 中间件
app.use(session({
  name: config.session.key,// 设置 cookie 中保存 session id 的字段名称
  secret: config.session.secret,// 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
  cookie: {
    maxAge: config.session.maxAge// 过期时间，过期后 cookie 中的 session id 自动删除
  },
  store: new MongoStore({
    url: config.db
  })
}));


// 处理表单及文件上传的中间件
app.use(formidable({
  uploadDir: path.join(__dirname, 'public/images'),
  keepExtensions: true //保留后缀
}));


app.use('/api', apiRouter);

app.listen(config.port, function() {
  console.log('Express server listening on port ' + config.port);
});