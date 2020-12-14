const User = require("../models/user");
const userService = require("../services/user");
const { JWT_SECRET } = require("../configuration");

const setTokenCookie = (res, token) => {
  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  };
  console.log(token);
  res.cookie("REFRESH_TOKEN", token, cookieOptions);
};

exports.signIn = async (req, res, next) => {
  const ipAddress = req.ip;
  const profile = req.body.profileObj;

  userService
    .authenticate({ profile, ipAddress })
    .then(({ jwtToken, refreshToken, ...user }) => {
      setTokenCookie(res, refreshToken);
      res.status(200).json({
        status: 200,
        data: { ...user, ACCESS_TOKEN: jwtToken },
        result: true,
      });
    })
    .catch(next);
};

exports.signOut = async (req, res, next) => {
  // res.clearCookie("loginObj");
  // res.clearCookie("REFRESH_TOKEN", {
  //   path: "http://localhost:3000",
  // });
  res.clearCookie("REFRESH_TOKEN");
  res.status(200).json({ result: true });
};

exports.googleOAuth = async (req, res, next) => {
  const username = req.user.username;
  const ipAddress = req.ip;
  userService
    .authenticate({ username, ipAddress })
    .then(({ jwtToken, refreshToken, ...user }) => {
      setTokenCookie(res, refreshToken);
      res.status(200).json({
        status: 200,
        data: { ...user, ACCESS_TOKEN: jwtToken },
        result: true,
      });

      // res.redirect("http://localhost:3000");
    })
    .catch(next);
};

exports.refreshToken = (req, res, next) => {
  const token = req.cookies.refreshToken;
  const ipAddress = req.ip;
  userService
    .refreshToken({ token, ipAddress })
    .then(({ refreshToken, ...user }) => {
      setTokenCookie(res, refreshToken);
      res.json(user);
    })
    .catch(next);
};

exports.getRefreshToken = async (token) => {
  const refreshToken = await db.RefreshToken.findOne({ token }).populate(
    "user"
  );
  if (!refreshToken || !refreshToken.isActive) throw "Invalid token";
  return refreshToken;
};

exports.revokeTokenSchema = (req, res, next) => {
  const schema = Joi.object({
    token: Joi.string().empty(""),
  });
  validateRequest(req, next, schema);
};

exports.revokeToken = (req, res, next) => {
  const token = req.body.token || req.cookies.refreshToken;
  const ipAddress = req.ip;

  if (!token) return res.status(400).json({ message: "Token is required" });

  if (!req.user.ownsToken(token) && req.user.role !== Role.Admin) {
    return res.status(401).json({ status: 401, error: "Unauthorized" });
  }

  userService
    .revokeToken({ token, ipAddress })
    .then(() => res.status(200).json({ message: "Token revoked" }))
    .catch(next);
};

exports.getRefreshTokens = (req, res, next) => {
  if (req.params.id !== req.user.userId) {
    return res.status(401).json({ status: 401, error: "Unauthorized" });
  }

  userService
    .getRefreshTokens(req.params.id)
    .then((tokens) =>
      tokens
        ? res.status(200).json({ result: true, data: tokens, status: 200 })
        : res.sendStatus(404)
    )
    .catch(next);
};
