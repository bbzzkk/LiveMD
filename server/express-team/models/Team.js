const mongoose = require("mongoose");
const { getUuid } = require("../utils/index");

const TeamSchema = new mongoose.Schema({
  teamId: {
    type: String,
    required: true,
    unique: true,
    default: getUuid,
    index: true,
  },
  teamname: {
    type: String,
    match: [/^.{4,12}$/, "Should be 4-12 characters!"],
    unique: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    // required: true,
  },
  updatedAt: { type: String },
  imageAttr: {
    width: Number,
    height: Number,
    imageURL: { type: String, default: "" },
  },
});

module.exports = mongoose.model("Team", TeamSchema);
