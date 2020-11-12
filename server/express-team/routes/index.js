const router = require("express-promise-router")();

const team = require("./api/teams");
const member = require("./api/members");

/** * @author Jane Smith <jsmith@example.com> */

router.use("/teams", team);
router.use("/members", member);

module.exports = router;
