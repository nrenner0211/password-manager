const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

// connection
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');

// handlebars, view engine setup
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/'));

// init
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});