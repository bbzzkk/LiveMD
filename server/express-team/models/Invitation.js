const mongoose = require("mongoose");
const mongooseHidden = require("mongoose-hidden")();
const moment = require("moment-timezone");
const date = moment.tz(Date.now(), "Asia/Seoul");

const InvitationSchema = new mongoose.Schema({
  memberId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Should be a vaild email address!",
    ],
  },
  code: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  createdAt: { type: Date, default: date, expires: "10s" },
});

InvitationSchema.plugin(mongooseHidden, { hidden: { _id: true } });
module.exports = mongoose.model("Invitation", InvitationSchema);
