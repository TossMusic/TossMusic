const express = require('express');
const router = express.Router();
const passport = require('passport')
const JamendoApiHandler = require('../services/APIHandler')
const JamendoApi = new JamendoApiHandler()

const genres = ["lounge", "classical", "electronic", "jazz", "pop", "hiphop", "relaxation", "rock", "songwriter", "world", "metal", "soundtrack"];

/* GET home page */
router.get('/', (req, res, next) => {

  console.log('EL REQ PUNTO QUERY ILLOO', req.query);

  if (req.user === undefined) {
    res.render('index');
  } else {
    res.render("search-album", {
      genres,
      result: null
    })
  }

});

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
          result
        })
      } else {
        res.render("search-album", {
          genres,
          result: null
        })
      }

    })




  // JamendoApi.search(req.body.search, req.body.searchGenre)
  //   .then(result => {
  //     // console.log('result search', result);
  //     if (result.length) {
  //       res.render("search-album", { genres, result })
  //     } else {
  //       res.render("search-album", { genres, result: null })
  //     }
  //   })

  // JamendoApi.getFullAlbums()
  //   .then(result)
});

module.exports = router;