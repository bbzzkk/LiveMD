const router = require("express-promise-router")();

const team = require("./api/teams");
const member = require("./api/members");

router.use("/teams", team);
router.use("/members", member);

module.exports = router;
