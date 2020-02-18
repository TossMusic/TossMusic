const express = require('express');
const router = express.Router();
const passport = require('passport')

/* GET home page */
router.get('/', (req, res, next) => {
  if (req.user === undefined) {
    res.render('index');
  } else {
    res.render('search-album');
  }
});



module.exports = router;