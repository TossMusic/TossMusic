const express = require('express')
const router = express.Router()
const JamendoApiHandler = require('../services/APIHandler')
const JamendoApi = new JamendoApiHandler()

//Formato para busqueda por id de artista
//"https://api.jamendo.com/v3.0/tracks?id=123447&lang=fr&client_id=ae3ce9b7"
router.get('/:albumId', (req, res) => {

    JamendoApi.getAlbumDetails(req.params.albumId)
        .then(songFound =>{
            console.log(songFound)
            res.render('new-songs', { infoAlbum: songFound })})

            
        .catch(err => console.log("ha habido un problema al encontrar la canción", err))

})




module.exports = router