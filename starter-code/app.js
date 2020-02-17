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

const playlistRoutes= require('./routes/playlist.routes');
app.use('/playlist', playlistRoutes);


module.exports = app;