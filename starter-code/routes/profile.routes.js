const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User.model");

router.get('/', (req, res) => {
  //Buscar por nombre o Id las playlist para mandarlas a profile
  Playlist.find({
      userId: req.user.id
    })
    .then(playlists => {
      console.log(`${playlists}`)
      res.render("profile", {
        user: req.user,
        playlists
      })
    })
    .catch(err => console.log("Se produjo un error al buscar la playlist", err))
});

module.exports = router