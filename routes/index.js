const express = require('express');
const router = express.Router();
const passport = require('passport')
const JamendoApiHandler = require('../services/APIHandler')
const JamendoApi = new JamendoApiHandler()

const genres = ["lounge", "classical", "electronic", "jazz", "pop", "hiphop", "relaxation", "rock", "songwriter", "world", "metal", "soundtrack"];

router.get('/', (req, res, next) => {

  if (!req.user) {
    res.render('index');
  } else {
    res.render("search-album", {
      genres,
      user: req.user,
      result: null
    })
  }

})

router.post('/', (req, res, next) => {

  let query = "";

  if (req.body.search !== "") {
    query += `&namesearch=${req.body.search}`;
  }

  if (req.body.searchGenre !== 'Search genre') {
    query += `&tags=${req.body.searchGenre}`;
  }

  JamendoApi.searchAlbums(query, 12)
    .then(result => {
      console.log('searchAlbums result: ', result);

      if (result.length) {
        res.render("search-album", {
          genres,
          user: req.user,
          result
        })
      } else {
        res.render("search-album", {
          genres,
          user: req.user,
          result: null
        })
      }

    })
    .catch(err => {
      console.log("error al traer los albums de la api", err)
    })
})

module.exports = router;