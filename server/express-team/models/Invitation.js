const mongoose = require("mongoose");

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
  createdAt: {
    type: String,
    default: Date.now(),
    index: { expires: 60 * 10 },
  },
});

// mongoose.set("invitationCreateIndex", true);
module.exports = mongoose.model("Invitation", InvitationSchema);
