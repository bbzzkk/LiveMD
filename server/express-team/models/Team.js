const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment");
const uuid = require("../utils/uuid");

const TeamSchema = new mongoose.Schema({
  teamId: {
    type: String,
    required: true,
    unique: true,
    default: uuid(),
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
  updatedAt: { type: Date },
  imageAttr: {
    width: Number,
    height: Number,
    imageURL: { type: String, default: "" },
  },
});

// TeamSchema.plugin(autoIncrement.plugin, "Team");
module.exports = mongoose.model("Team", TeamSchema);
