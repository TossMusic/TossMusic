const express = require('express')
const router = express.Router()

const Playlist = require('../models/Playlist.model')
const Song = require('../models/Song.model')


router.get('/', (req, res) => {
    res.render('playlist/playlist-form', {
        user: req.user
    })
})
router.post('/', (req, res) => {

    const {
        name,
        genre
    } = req.body

    Playlist.create({
            name,
            genre,
            userId: req.user._id
        })
        .then(() => res.redirect('/playlist'))
        .catch(err => console.log("hay un error en el post de playlist routes", err))
})

router.get("/edit/:id", (req, res) => {
    const playlistId = req.params.id

    Playlist.findById(playlistId)
        .then(playlist => {
            res.render("playlist/playlist-edit", {
                playlist,
                user: req.user
            })
        })
        .catch(err => console.log("no se puede editar la playlist"))
})

router.post('/edit/:id', (req, res) => {
    const playlistId = req.params.id

    Playlist.findByIdAndUpdate(playlistId, {
            name: req.body.name,
            genre: req.body.genre,
        }, {
            useFindAndModify: false
        })
        .then(x => res.redirect("/profile")
            .catch(err => {
                console.log("Hubo un error al actualizar la playlist", err)
            })
        )
})

router.get("/detail/:id", (req, res) => {
    const playlistId = req.params.id

    Playlist.findById(playlistId)
        .then(playlist => {
            console.log(playlist)
            Song.find({
                _id: {
                    $in: playlist.songs
                }
            }).then(songs => {
                console.log(songs)
                res.render("playlist/playlist-show", {
                    playlist,
                    user: req.user,
                    songs
                })
            })
        })
})

module.exports = router