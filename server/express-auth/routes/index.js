const router = require("express-promise-router")();

const auth = require("./apis/auth");
const users = require("./apis/users");

router.use("/auth", auth);
router.use("/users", users);

module.exports = router;
