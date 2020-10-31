const mongoose = require("mongoose");

const InvitationSchema = new mongoose.Schema({
  memberId: {
    type: Number,
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
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
    expires: 600, // 10분 뒤 만료
  },
});

// mongoose.set("invitationCreateIndex", true);
module.exports = mongoose.model("Invitation", InvitationSchema);
