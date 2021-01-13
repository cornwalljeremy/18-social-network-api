const router = require("express").Router();

const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");
// const reactionRoutes = require("./reaction-routes");

router.use('/api/user', userRoutes);
router.use('/api/thoughts', thoughtRoutes);
// router.use('/api/reaction', reactionRoutes);

module.exports = router;