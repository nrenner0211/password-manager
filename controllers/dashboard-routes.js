const router = require("express").Router();
const sequelize = require("../config/connection");
const { Item, User } = require("../models");

router.get('/dashboard', (req, res) => {
    res.render('dashboard', { loggedIn: true });
});

module.exports = router;