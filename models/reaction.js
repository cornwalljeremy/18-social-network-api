const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema({
  noteId: {
    type: Schema.Types.ObjectId,
    default: Date.now,
  },
});

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
    },

    reactionBody: {
      type: String,
      required: "reaction required",
      minlength: 1,
      maxlength: 280,
    },

    username: {
      type: String,
      required: "username required",
    },

    createdAt: {
      type: Date,
      default: Date.now,
      //   **** get: '<insert get timestamp here>'****
    },

    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
