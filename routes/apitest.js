const express = require('express');
const router = express.Router();
const JamendoApiHandler = require('../services/APIHandler')
const JamendoApi = new JamendoApiHandler()

router.get("/", (req, res) => {

    JamendoApi.getFullAlbums()
        .then(result => {
            res.json(result)
        })
})

router.get('/tracks', (req, res) => {
    //searchtext vendra de req.body
    const searchText = "metallica"
    JamendoApi.search(searchText, genres)
        .then(result => {
            console.log(result)
            res.render()
        })

})


module.exports = router


/*en app.js
  const search = require('./routes/search.routes');
  app.use('/search', search)+/
module.exports = router*/