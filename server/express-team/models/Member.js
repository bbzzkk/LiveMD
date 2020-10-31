const mongoose = require("mongoose");
// autoInc.initialize(mongoose.connection);
const uuid = require("../utils/uuid");

const MemberSchema = new mongoose.Schema({
  memberId: {
    type: Number,
    required: true,
    unique: true,
    default: uuid(),
    index: true,
  },
  teamId: {
    type: Number,
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

// MemberSchema.plugin(autoInc.plugin, "Member");
// mongoose.set("memberCreateIndex", true);
module.exports = mongoose.model("Member", MemberSchema);
