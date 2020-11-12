const mongoose = require("mongoose");
const mongooseHidden = require("mongoose-hidden")();
const moment = require("moment-timezone");
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
    match: [/^.{3,12}$/, "Should be 4-12 characters!"],
    unique: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: moment.tz(Date.now(), "Asia/Seoul"),
  },
  updatedAt: { type: Date },
  imageAttr: {
    width: Number,
    height: Number,
    imageURL: { type: String, default: "" },
  },
});

TeamSchema.plugin(mongooseHidden, { hidden: { _id: true } });
module.exports = mongoose.model("Team", TeamSchema);
