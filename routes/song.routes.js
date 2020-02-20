const express = require('express')
const router = express.Router()
const JamendoApiHandler = require('../services/APIHandler')

const JamendoApi = new JamendoApiHandler()
const Playlist = require('../models/Playlist.model')

router.get('/:albumId', (req, res) => {

    JamendoApi.getAlbumDetails(req.params.albumId)
        .then(songFound => {
            console.log(songFound)
            Playlist.find({
                    userId: req.user.id
                })
                .then(playlists => {
                    const data = {
                        infoAlbum: songFound,
                        user: req.user,
                        playlists
                    }
                    console.log(data)
                    res.render('new-songs', data)
                })
        })
        .catch(err => console.log("ha habido un problema al encontrar la canción", err))

})

module.exports = router