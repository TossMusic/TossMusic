const express = require('express')
const router = express.Router()
const JamendoApiHandler = require('../services/APIHandler')
const JamendoApi = new JamendoApiHandler()

router.get('/:albumId', (req, res) => {

    JamendoApi.getAlbumDetails(req.params.albumId)
        .then(songFound => {
            console.log(songFound)
            res.render('new-songs', {
                infoAlbum: songFound,
                user: req.user
            })
        })
        .catch(err => console.log("ha habido un problema al encontrar la canción", err))

})

module.exports = router