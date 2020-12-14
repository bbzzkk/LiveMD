const router = require("express").Router();
const { teamController } = require("../../controllers/index");
const { checkTeams, checkAccess } = require("../../middleware/index");

router.post("/", checkTeams.createTeam, teamController.createTeam);
router.get("/", checkTeams.getManyTeam, teamController.getManyTeam);
router.get("/:teamId", checkTeams.getOneTeam, teamController.getOneTeam);
router.put("/:teamId", checkTeams.updateTeam, teamController.updateTeam);
router.delete("/:teamId", checkTeams.deleteTeam, teamController.deleteTeam);

module.exports = router;
