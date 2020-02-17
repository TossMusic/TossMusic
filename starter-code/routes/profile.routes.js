const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User.model");

router.get('/', (req, res) => {
  res.render("profile", {
    user: req.user
  })

});

module.exports = router