const router = require("express").Router();
const sequelize = require("../config/connection");
const { Item, User } = require("../models");
const withAuth = require("../utils/auth");

// get all items for dashboard
router.get("/", withAuth, (req, res) => {
  console.log(req.session);

  Item.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "content", "title", "created_at"],
  })
    .then((dbPostData) => {
      const items = dbPostData.map((item) => item.get({ plain: true }));
      res.render("dashboard", { items, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
  Item.findByPk(req.params.id, {
    attributes: ["id", "content", "title", "created_at"],
  })
    .then((dbPostData) => {
      if (dbPostData) {
        const item = dbPostData.get({ plain: true });

        res.render("edit-item", {
          item,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;

// // GET items for dashboard
// router.get("/", withAuth, (req, res) => {
//   Item.findAll({
//     where: {
//       user_id: req.session.user_id,
//     },
//     attributes: ["id", "content", "title", "created_at"],
//   })
//     .then((dbPostData) => {
//       const items = dbPostData.map((item) => item.get({ plain: true }));
//       res.render("dashboard", { items, loggedIn: true });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// // POST /api/items
// router.post("/dashboard/", withAuth, (req, res) => {
//   Item.create({
//     title: req.body.title,
//     content: req.body.content
//   })
//     .then((dbUserData) => {
//       req.session.save(() => {
//         req.session.user_id = dbUserData.id;
//         req.session.username = dbUserData.username;
//         req.session.loggedIn = true;

//         res.json(dbUserData);
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// module.exports = router;
