const express = require('express');
const router = express.Router();
const sha1 = require('sha1');
const User = require('../models/User');

router.post('/', (req, res) => {
  let email = req.fields.email;
  let password = req.fields.password;

  User.findOne({email})
    .then(user => {
      if (!user) {
        res.json({
          success: false,
          code: 404,
          msg: '用户不存在'
        })
      }
      if (sha1(password) !== user.password) {
        res.json({
          success: false,
          code: 401,
          msg: '用户名或密码错误'
        })
      }
      user = {
        name: user.name,
        email: user.email,
        id: user._id
      };
      req.session.user = user;
      res.json({
        success: true,
        code: 200,
        user: user
      })
    })
});

module.exports = router;