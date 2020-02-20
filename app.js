require('dotenv').config();

// Database
const mongoose = require('./configs/mongoose.config')

// Debugger
require('./configs/debugger.config')

const express = require('express');
const app = express();


// Configs
require('./configs/middleware.config')(app)
require('./configs/preformatter.config')(app)
require('./configs/locals.config')(app)
require('./configs/views.config')(app)
require('./configs/session.config')(app)
require('./configs/flash.config')(app)
require('./configs/hbs.config')

require('./passport')(app);

const index = require('./routes/index');
app.use('/', index);

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const profile = require('./routes/profile.routes');
app.use('/profile', profile);

const playlistRoutes = require('./routes/playlist.routes');
app.use('/playlist', playlistRoutes);

const songs= require('./routes/song.routes');
app.use('/song', songs)

const apitest = require('./routes/apitest');
app.use('/apitest', apitest);


module.exports = app;