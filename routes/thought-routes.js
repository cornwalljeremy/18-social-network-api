const router = require("express").Router();

const {
  addThought,
  addReaction,
  removeThought,
  removeReaction
} = require("../controller/thought-controller");


router.route("/:thoughtId").post(addThought);


router.route("/:thoughtId/:reactionId").put(addReaction).delete(removeReaction);

router.route("/:userId/:ThoughtId/:reactionId").delete(removeThought);


module.exports = router;

 
  
