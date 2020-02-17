const express = require('express')
const router = express.Router()

const Playlist = require('../models/Playlist.model')
const Songs = require('../models/Song.model')

//renderiza las playlist

router.get('/', (req, res) => {
    Songs.find()
        .then(allSongs => res.render('songs/songs.list'), { songs: allSongs })
        .catch(err => console.log("Ha habido un error en allSongs")
})