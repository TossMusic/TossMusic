const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//prueba test api

// router.get("/apitest", (req, res) => {
//   const result = {}
//   const JamendoApiHandler = require('../services/APIHandler')
//   const JamendoApi = new JamendoApiHandler()

//   JamendoApi.getFullAlbums()

//   res.json(result)
// })

router.get("/apitest", (req, res) => {
  const JamendoApiHandler = require('../services/APIHandler')
  const JamendoApi = new JamendoApiHandler()

  JamendoApi.getFullTracks()
    .then(result => {
      res.json(result)
    })
  /*los metodos de jamendoApi devuelven una promesa que hay
  que resolver, cuando haya que devolverlo a la plantilla de 
  search en vez de res.json hay que usar res.render para que 
  se pinte en el hbs*/
})



module.exports = router;