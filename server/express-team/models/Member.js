const mongoose = require("mongoose");
const { getUuid } = require("../utils/index");

const MemberSchema = new mongoose.Schema({
  memberId: {
    type: String,
    required: true,
    unique: true,
    index: true,
    default: getUuid,
  },
  userId: {
    type: String,
    required: true,
    // index: true,
  },
  teamId: {
    type: String,
    required: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    match: [/^.{4,12}$/, "Should be 4-12 characters!"],
    index: true,
  },
  role: {
    type: String,
    enum: ["owner", "admin", "writer", "reader"],
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
});

module.exports = mongoose.model("Member", MemberSchema);
