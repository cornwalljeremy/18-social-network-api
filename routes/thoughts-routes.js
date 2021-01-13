const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateUser,
  deleteUser
} = require("../controller/thought-controller");

router.route("/").get(getAllUsers).post(createUser);


router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;

 
  
