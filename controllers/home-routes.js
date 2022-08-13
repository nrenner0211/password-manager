const router = require("express").Router();
const sequelize = require("../config/connection");
const { Item, User } = require("../models");

router.get("/", (req, res) => {
  Item.findAll({
    attributes: [
      "id",
      "item_content",
      "title",
      "created_at",
    //   [
    //     sequelize.literal(
    //       "(SELECT COUNT(*) FROM user WHERE item.id = user.item_id)"
    //     )
    //   ],
    ],
    // include: {
    //     model: User,
    //     attributes: ['username']
    // }
  })
    .then((dbPostData) => {
      // pass a single post object into the homepage template
      console.log(dbPostData[0]);
      const items = dbPostData.map(items => items.get({ plain: true }));
      res.render('homepage', dbPostData[0].get({ plain: true }));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
