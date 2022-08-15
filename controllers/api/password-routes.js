const router = require('express').Router();
const { Password} = require('../../models');

router.get('/', (req, res) => {
    Password.findAll()
        .then(userInput => res.json(userInput))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Password.create ({
        website: req.body.website,
        username: req.body.username,
        password: req.body.password
    })
        .then(userInput => res.json(userInput))
        .catch(err => {
        res.status(500).json(err);
        });
})

router.put('/:id', (req, res) => {
    Password.update (req.body, {
        where: {
            id: req.params.id
        }
    }) 
        .then(userInput => res.json(userInput))
        .catch(err => {
            res.status(500).json(err);
        });
})

router.delete('/:id', (req, res) => {
    Password.destory({
        where: {
            id: req.params.id
        }
    })
        .then(userInput => res.json(userInput))
        .catch(err => {
            res.status(500).json(err);
        });
})

module.exports = router;