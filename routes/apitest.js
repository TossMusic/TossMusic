const express = require('express');
const router = express.Router();
   const JamendoApiHandler = require('../services/APIHandler')
   const JamendoApi = new JamendoApiHandler()

router.get("/", (req, res) => {

    JamendoApi.getFullAlbums()
        .then(result => {
            res.json(result)
        })
    /*los metodos de jamendoApi devuelven una promesa que hay
    que resolver, cuando haya que devolverlo a la plantilla de 
    search en vez de res.json hay que usar res.render para que 
    se pinte en el hbs*/
})

router.get('/albums', (req, res) => {
    //searchtext vendra de req.body
    const genres = req.query.genres
 
    JamendoApi.search(searchText, genres)
        .then(result => {
            console.log(result)
        })

})

module.exports = router


/*en app.js
  const search = require('./routes/search.routes');
  app.use('/search', search)+/
module.exports = router*/