const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    device: String,
  },
  { versionKey: false }
);

const postModel = mongoose.model("post", postSchema);

module.exports = { postModel };
