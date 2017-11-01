const express = require('express');
const router = express.Router();

router.use('/auth', require('./user'));
router.use('/signup', require('./signup'));
router.use('/login', require('./login'));
router.use('/checkAuth', require('./checkAuth'));

module.exports = router;