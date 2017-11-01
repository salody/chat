/**
 * 功能描述: 注册页面
 * @author: liuguanbang
 * 2017/9/25
 */
const sha1 = require('sha1');
const express = require('express');
const router = express.Router();

const User = require('../models/User');

// POST /signup 用户注册
router.post('/', function (req, res) {
  console.log(req.session);
  let name = req.fields.name;
  let email = req.fields.email;
  let password = req.fields.password;
  let type = req.fields.type;
  // 明文密码加密
  password = sha1(password);

  // 同一个邮箱只能注册一次。用户名可以重复
  User.findOne({email})
    .then(user => {
      if (!user) {
        // 待写入数据库的用户信息
        let user = {
          name: name,
          password: password,
          email: email,
          type: type
        };
        User.create(user)
          .then(user => {
            user = {
              name: user.name,
              email: user.email,
              type: user.type,
              id: user._id
            };
            req.session.user = user;
            res.json({
              success: true,
              code: 200,
              user: user
            })
          })
          .catch(e => {
            res.json({
              success: false,
              code: 500,
              msg: '写入数据库错误' + e.toString()
            })
          })
      } else {
        res.json({
          success: false,
          code: 500,
          msg: "该邮箱已被注册!"
        })
      }
    })
    .catch(e => {
      res.json({
        success: false,
        code: 500,
        msg: '数据库读取错误!' + e.toString()
      })
    })
});

module.exports = router;