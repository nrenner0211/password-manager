const router = require("express").Router();
const { Item, User } = require("../../models");

// http://localhost:3001/api/items/

// GET items
router.get("/", (req, res) => {
  Item.findAll({
    attributes: ["id", "title", "created_at"],
  })

    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;