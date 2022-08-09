// import models
const User = require("./User");
const Item = require("./Item");


// create associations
User.hasMany(Item, {
    foreignKey: 'user_id'
});

Item.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Item };
