const express = require('express');
const router = express.Router();
const passport = require('passport')
const Songs = require('../models/Song.model')

/* GET home page */
router.get('/', (req, res, next) => {
  if (req.user === undefined) {
    res.render('index');
  } else {
    const genres = ["lounge", "classical", "electronic", "jazz", "pop", "hiphop", "relaxation", "rock", "songwriter", "world", "metal", "soundtrack"]
    res.render("search-album", { genres })
  }

});

// router.post('/', (req, res, next) => {
//   Songs.find()
//     .then(result => {
//       console.log(result)
//       res.render()
//     })

// }
//)


module.exports = router;