const router = require('express').Router();

const userRoutes = require('./user-routes');
const itemRoutes = require('./item-routes');
const passwordRoutes = require('./password-routes');

router.use('/users', userRoutes);
router.use('/items', itemRoutes);
router.use('/passwords', passwordRoutes);

module.exports = router;