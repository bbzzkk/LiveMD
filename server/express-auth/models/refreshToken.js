const mongoose = require("mongoose");
const mongooseHidden = require("mongoose-hidden")();
const Schema = mongoose.Schema;

const schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  token: String,
  expires: Date,
  created: { type: Date, default: Date.now },
  createdByIp: String,
  revoked: Date,
  revokedByIp: String,
  replacedByToken: String,
});

schema.virtual("isExpired").get(function () {
  return Date.now() >= this.expires;
});

schema.virtual("isActive").get(function () {
  return !this.revoked && !this.isExpired;
});

schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.id;
    delete ret.user;
  },
});

schema.plugin(mongooseHidden, { hidden: { _id: true } });

module.exports = mongoose.model("RefreshToken", schema);
