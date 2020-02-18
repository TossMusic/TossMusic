const express = require('express');
const router = express.Router();
const passport = require('passport')
const JamendoApiHandler = require('../services/APIHandler')
const JamendoApi = new JamendoApiHandler()

/* GET home page */
router.get('/', (req, res, next) => {
  if (req.user === undefined) {
    res.render('index');
  } else {
    res.render('search-album');
  }
});

router.post('/', (req, res, next) => {
  JamendoApi.search(searchText, genres)
    .then(result => {
      console.log(result)
      res.render()
    })

}
)


module.exports = router;