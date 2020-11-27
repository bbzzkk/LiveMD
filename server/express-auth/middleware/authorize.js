const jwt = require("express-jwt");
const { secret } = require("config.json");
const db = require("_helpers/db");

module.exports = authorize;

function authorize() {
  return [
    jwt({ secret, algorithms: ["HS256"] }),

    async (req, res, next) => {
      const user = await db.User.findById(req.user.id);

      if (!user || (roles.length && !roles.includes(user.role))) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      req.user.role = user.role;
      const refreshTokens = await db.RefreshToken.find({ user: user.id });
      req.user.ownsToken = (token) =>
        !!refreshTokens.find((x) => x.token === token);
      next();
    },
  ];
}
