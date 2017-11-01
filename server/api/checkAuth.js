const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (req.session.user) {
    res.json({
      success: true,
      isAuth: true,
      user: req.session.user
    })
  } else {
    res.json({
      success: true,
      isAuth: false
    })
  }

});

module.exports = router;