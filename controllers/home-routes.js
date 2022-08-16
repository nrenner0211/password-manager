const router = require("express").Router();
const sequelize = require("../config/connection");
const { Item, User } = require("../models");

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('homepage');
});

module.exports = router;
