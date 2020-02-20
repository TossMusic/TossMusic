const hbs = require('hbs');
const path = require('path');


hbs.registerHelper('ifUndefined', (value, options) => {
    if (arguments.length < 2)
    throw new Error("Handlebars Helper ifUndefined needs 1 parameter");
    if (typeof value !== undefined) {
        return options.inverse(this);
    } else {
        return options.fn(this);
    }
});


hbs.registerPartials(path.join(__dirname, '../views/partials'));
module.exports = hbs