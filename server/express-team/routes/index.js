const express = require("express");

const router = express.Router();

const team = require("./api/teams");
const member = require("./api/members");

router.use("/teams", team);
router.use("/members", member);

module.exports = router;
