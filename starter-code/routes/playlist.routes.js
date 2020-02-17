const express = require('express')
const router = express.Router()

const Playlist = require('../models/Playlist.model')


//renderiza las playlist

router.get('/', (req, res) => res.render('playlist/playlist-form'))
router.post('/', (req, res) => {

    const { name, genre } = req.body

    Playlist.create({ name, genre })
        .then(() => res.redirect('/profile'))
        .catch(err => console.log("hay un error en el post de playlist routes", err))
}


)


module.exports = router