// Enable authentication using session + passport
const mongoose = require('./mongoose.config')
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);

module.exports = app => {
    app.use(session({
        secret: 'irongenerator',
        resave: true,
        saveUninitialized: true,
        store: new MongoStore({
            mongooseConnection: mongoose.connection
        })
    }))
}