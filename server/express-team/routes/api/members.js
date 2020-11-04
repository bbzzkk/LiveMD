const router = require("express").Router();
const { memberController } = require("../../controllers/index");
const { checkMembers } = require("../../middleware/index");

router.post("/", checkMembers.inviteMembers, memberController.inviteMembers);
router.post(
  "/confirm",
  checkMembers.confirmMember,
  memberController.confirmMember
);
router.get("/", checkMembers.getManyMember, memberController.getManyMember);
router.put(
  "/:memberId",
  checkMembers.updateMember,
  memberController.updateMember
);
router.delete(
  "/:memberId",
  checkMembers.deleteOneMember,
  memberController.deleteOneMember
);

module.exports = router;
