const User = require("../models/user");

exports.getById = (req, res, next) => {
  if (req.params.id !== req.user.id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  userService
    .getById(req.params.id)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch(next);
};

module.exports;
