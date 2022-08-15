const path = require('path');
const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store)

// const sess = {
//   secret: 'hamburger',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

const app = express();
const PORT = process.env.PORT || 3000;

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// makes public folder available
app.use(express.static(path.join(__dirname, 'public')));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/css", express.static(__dirname + "/public/css"));

// access controllers
app.use(controllers);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
  // const savePass = function() {
  //   localStorage.setItem('')
  // }
// console.log(`Now listening to ${PORT}`)