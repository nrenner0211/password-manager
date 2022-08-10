const router = require("express").Router();
const { Item, User } = require("../../models");

// http://localhost:3000/api/items/

// GET items
router.get("/", (req, res) => {
  Item.findAll({
    attributes: ["id", "title", "item_content", "created_at"],
    order: [['created_at', 'DESC']]
  })

    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// post items
router.post("/", (req, res) => {
  Item.create({
    title: req.body.title,
    item_content: req.body.item_content,
    user_id: req.body.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update items
router.put("/:id", (req, res) => {
  Item.update(
    {
      title: req.body.title,
      item_content: req.body.item_content
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "404 Not Found" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE
router.delete("/:id", (req, res) => {
  Item.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "404 Not Found" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
