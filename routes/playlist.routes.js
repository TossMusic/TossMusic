const express = require('express')
const router = express.Router()

const Playlist = require('../models/Playlist.model')
const Song = require('../models/Song.model')
const JamendoApiHandler = require('../services/APIHandler')

const JamendoApi = new JamendoApiHandler()

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
                })
                .then(songs => {
                    console.log(songs)
                    res.render("playlist/playlist-show", {
                        playlist,
                        user: req.user,
                        songs
                    })
                })
                .catch(err => {
                    console.log("hubo un error al mostrar las canciones", err)
                })
        })
        .catch(err => {
            console.log("error al buscar en la BBDD de playlist", err)
        })
})

router.post("/add-song", (req, res) => {
    const playlistId = req.body.playlistId
    const songId = req.body.songId

    Playlist.findById(playlistId)
        .then(playlist => {
            JamendoApi.getTrackDetail(songId)
                .then(songApi => Song.create(songApi))
                .then(song => {
                    playlist.songs.push(song._id)
                    playlist.save()
                        .then(data => {
                            res.redirect(`/playlist/detail/${playlist._id}`)
                        })
                        .catch(err => {
                            console.log("dónde no funcionaaaa", err)
                        })
                })
                .catch(err => {
                    console.log("erroooooor", err)
                })
                .catch(err => {
                    console.log("venga ya", err)
                })
                .catch(err => {
                    console.log("TT", err)
                })
        })
        .catch(err => {
            console.log("Hubo un error", err)
        })
})

// router.post("/:id/delete", (req, res, next) => {

//     const removeId = req.params.id

//     Playlist.findByIdAndRemove(removeId)
//         .then(() => res.redirect("/profile"))
//         .catch(err => {
//             console.log("Hubo un error borrando la playlist en la BBDD: ", err)
//             next(err)
//         })
// })

module.exports = router