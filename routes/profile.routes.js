const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User.model");
const Playlist = require("../models/Playlist.model")

router.get('/', (req, res) => {
  //Buscar por nombre o Id las playlist para mandarlas a profile
  Playlist.find({
      userId: req.user.id
    })
    .then(playlists => {
      res.render("profile", {
        user: req.user,
        playlists
      })
    })
    .catch(err => console.log("Se produjo un error al buscar la playlist", err))
});

router.get('/edit', (req, res) => {
  res.render('genres-profile')
})

router.post('/edit', (req, res) => {
  let genres = Object.keys(req.body) //saca las claves de todos los checkbox marcados en el formulario
  return User.findByIdAndUpdate(req.user.id, {
    genre: genres
  }).then(result => {
    return res.redirect('/profile')
  })
})

module.exports = router