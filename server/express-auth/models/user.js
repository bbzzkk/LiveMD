const mongoose = require("mongoose");
const mongooseHidden = require("mongoose-hidden")();
const getUuid = require("../utils/getUuid");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: {
    type: String,
    unique: true,
    default: getUuid,
  },
  googleId: { type: String },
  username: { type: String, unique: true },
  email: {
    type: String,
    lowercase: true,
    unique: true,
  },
  thumbnail: { type: String },
});

userSchema.plugin(mongooseHidden, { hidden: { _id: true } });
module.exports = mongoose.model("user", userSchema);
