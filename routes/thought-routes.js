const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  addThought,
  addReaction,
  removeThought,
  removeReaction
} = require("../controller/thought-controller");


router.route("/").post(addThought).get(getAllThoughts);


router.route("/:thoughtId/:reactionId").delete(removeReaction);
router.route("/:thoughtId").put(addReaction).get(getThoughtById);
router.route("/:userId/:ThoughtId/:reactionId").delete(removeThought);


module.exports = router;

 
  
