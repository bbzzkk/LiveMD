const expressJwt = require("express-jwt");
const config = require("config.json");

module.exports = jwt;

function jwt() {
  const { secret } = config;
  return expressJwt({ secret, algorithms: ["HS256"] }).unless({
    path: ["/users/authenticate"],
  });
}
