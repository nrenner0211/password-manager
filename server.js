const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// access controllers
app.use(controllers);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
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
