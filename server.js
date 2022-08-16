const path = require('path');
const express = require('express');
const session = require("express-session");
const controllers = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = require('./config/connection');
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: 'hamburger',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};

app.use(session(sess));

const exphbs = require('express-handlebars');
const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// makes public folder available
app.use(express.static(path.join(__dirname, 'public')));

// access controllers
app.use(controllers);

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


// function to create username/password and site url to send to database
// app.post('/api/pass_word/', ({ body }, res) => {
//   const errors = inp
//   const sql = `INSERT INTO userInput (website, username, pass_word )`
//   if (!) 
//   const passWord = $('')
//     .addText('')
//   addUserData.append(passWord);
// });




  // const savePass = function() {
  //   localStorage.setItem('')
  // }
