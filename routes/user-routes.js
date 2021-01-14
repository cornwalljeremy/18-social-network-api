const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend
} = require("../controller/user-controller");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:userId/friends/:friendId").post(addFriend);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
