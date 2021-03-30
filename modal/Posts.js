const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  postedOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Posts", PostSchema);