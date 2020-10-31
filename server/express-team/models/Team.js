const mongoose = require("mongoose");
const uuid = require("../utils/uuid");
// autoInc.initialize(mongoose.connection);

console.log(uuid);
const TeamSchema = new mongoose.Schema({
  teamId: {
    type: Number,
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
    required: true,
  },
  updatedAt: { type: Date },
  thumbnailAttr: {
    width: Number,
    height: Number,
    imageURL: { type: String, default: "" },
  },
});

// TeamSchema.plugin(autoInc.plugin, "Team");
// mongoose.set("teamCreateIndex", true);
module.exports = mongoose.model("Team", TeamSchema);
