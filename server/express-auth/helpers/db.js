const mongoose = require("mongoose");
const connectionOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/LiveMD",
  connectionOptions
);
mongoose.Promise = global.Promise;

module.exports = {
  User: require("../models/user"),
  RefreshToken: require("../models/refreshToken"),
  isValidId,
};

function isValidId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}
