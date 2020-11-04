const { memberService, invitationService } = require("../services/index");
const { getCode, sendEmail } = require("../utils/index");

const inviteMembers = async (members) => {
  try {
    members.map(async ({ email, role }) => {
      validationResult(req).throw();

      const member = await memberService.createMember(
        userId,
        teamId,
        role,
        "pending"
      );
      const code = getCode(10);
      const url = `https://www.livemd.com/invitation?code=${code}`;
      await invitationService.create(member.memberId, email, code);
      sendEmail(email, url, teamname);
    });
    res.status(200).json({ result: true, status: 200 });
  } catch (e) {
    res.status(e.status).json({
      result: false,
      status: e.status,
      error: e.message,
    });
  }
};

const confirmMember = async (req, res) => {
  try {
    validationResult(req).throw();
    const invitation = InvitationService.getOneByCode(code);
    if (!invitation) {
      return res.status(500).json({
        result: false,
        status: 500,
        error: "Check whether invitation is valid",
      });
    }
    await memberService.updateOne(invitation.memberId);
    return res.status(200).json({ result: true, status: 200 });
  } catch (e) {
    res.status(e.status).json({
      result: false,
      status: e.status,
      error: e.message,
    });
  }
};

const getManyMember = async (req, res) => {
  try {
    validationResult(req).throw();
    await memberService.getManyByteamId(req.query.teamId);
    return res.status(200).json({ result: true, status: 200 });
  } catch (e) {
    res.status(e.status).json({
      result: false,
      status: e.status,
      error: e.message,
    });
  }
};

// Update by member
const updateMember = async (req, res) => {
  try {
    validationResult(req).throw();
    const { memberId } = req.params;
    const { teamId, userId, role } = req.body;
    const requestorRole = await memberService.getOnesRole(teamId, userId);

    if (requestorRole === ("owner" || "admin")) {
      const result = await memberService.updateRole(memberId, role);

      if (!result) {
        return res
          .status(404)
          .json({ result: false, status: 404, error: "User not found" });
      }
      return res.status(200).json({ result: true, status: 200 });
    } else {
      return res.status(403).json({
        result: false,
        status: 403,
        error: "No Access to Update Member",
      });
    }
  } catch (e) {
    res
      .status(e.status)
      .json({ result: false, status: e.status, error: e.message });
  }
};

// Delete by teamId
const deleteOneMember = async (req, res) => {
  try {
    validationResult(req).throw();

    const { memberId } = req.params;
    const { userId, teamId, type } = req.query;

    const requestorRole = await memberService.getOnesRole(teamId, userId);

    // ** type **
    // 0: leave
    // 1: kick out
    if (
      (type === "0" && requestorRole !== "owner") ||
      (type === "1" && requestorRole === ("owner" || "admin"))
    ) {
      const result = await memberService.deleteOne(memberId);
      if (!result) {
        return res.status(404).json({ result: false, error: "Team not found" });
      }
      return res.status(200).json({ result: true, status: 200 });
    } else {
      return res.status(500).json({
        result: false,
        status: 500,
        error: "No Access to Delete",
      });
    }
  } catch (e) {
    res
      .status(e.status)
      .json({ result: false, status: e.status, error: e.message });
  }
};

module.exports = {
  inviteMembers,
  confirmMember,
  getManyMember,
  updateMember,
  deleteOneMember,
};
