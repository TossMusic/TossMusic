const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

module.exports = app => {
    app.use(logger('dev'))
    app.use(function (req, res, next) {
        console.log('REQ.BODY AMTES DE BODY PARSER', req.body)
        next();
    })
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: false
    }))
    app.use(function (req, res, next) {
        console.log('REQ.BODY DESPUES DE BODY PARSER', req.body)
        next();
    })
    app.use(cookieParser())
}