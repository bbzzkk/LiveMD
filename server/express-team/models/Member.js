const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment");
const uuid = require("../utils/uuid");

const MemberSchema = new mongoose.Schema({
  memberId: {
    type: String,
    required: true,
    unique: true,
    index: true,
    default: uuid(),
  },
  userId: {
    type: String,
    required: true,
    index: true,
  },
  teamId: {
    type: String,
    required: true,
    index: true,
  },
  // email: {
  //   type: String,
  //   required: true,
  //   match: [/^.{4,12}$/, "Should be 4-12 characters!"],
  // },
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

// MemberSchema.plugin(autoIncrement.plugin, "Member");
module.exports = mongoose.model("Member", MemberSchema);
