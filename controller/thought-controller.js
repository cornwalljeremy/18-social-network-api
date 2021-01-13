const { Thought, User } = require("../models");

const thoughtController = {
  
  addThought({ params, body }, res) {
    console.log(body);
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No User found with this ID" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },

  // add reply to thought
  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { user: body } },
      { new: true, runValidators: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },

  // remove thought
  removeThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then((deletedthought) => {
        if (!deletedthought) {
          return res.status(404).json({ message: "No thought with this id!" });
        }
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { thoughts: params.thoughtId } },
          { new: true }
        );
      })
      .then((dbuserData) => {
        if (!dbuserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbuserData);
      })
      .catch((err) => res.json(err));
  },
  // remove reply
  removeReply({ params }, res) {
    thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { replies: { replyId: params.replyId } } },
      { new: true }
    )
      .then((dbuserData) => res.json(dbuserData))
      .catch((err) => res.json(err));
  },
};

module.exports = thoughtController;
















