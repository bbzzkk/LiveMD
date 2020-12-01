const { memberService, invitationService } = require("../services/index");
const { getCode, sendEmail } = require("../utils/index");
const { validationResult } = require("express-validator");

const inviteMembers = async (req, res) => {
  try {
    validationResult(req).throw();
    const { userId, teamId, teamname, members } = req.body;
    members.map(async ({ email, role }) => {
      try {
        const code = getCode(16);

        const member = await memberService.create(
          userId,
          teamId,
          teamname,
          role,
          email,
          "pending"
        );
        await invitationService.create(member.memberId, email, code);

        await sendEmail(
          email,
          `https://live-md.com/invitation?code=${code}`,
          teamname
        );
      } catch (e) {
        console.log(e);
        res.status(500).json({
          result: false,
          status: 500,
          error: e.errors,
        });
      }
    });
    res.status(200).json({ result: true, status: 200 });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      result: false,
      status: 500,
      error: e.errors,
    });
  }
};

const reinviteMember = async (req, res) => {
  try {
    validationResult(req).throw();
    const { email, teamname } = req.body;
    await sendEmail(
      email,
      `https://live-md.com/invitation?code=${code}`,
      teamname
    );
  } catch (e) {
    console.log(e);
    res.status(500).json({
      result: false,
      status: 500,
      error: e.errors,
    });
  }
};
const confirmMember = async (req, res) => {
  try {
    validationResult(req).throw();
    const invitation = InvitationService.getOneByCode(req.body.code);
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
    res.status(500).json({
      result: false,
      status: 500,
      error: e.errors,
    });
  }
};

const getManyMember = async (req, res) => {
  try {
    validationResult(req).throw();
    const members = await memberService.getManyByteamId(req.query.teamId);
    res.status(200).json({ result: true, status: 200, data: members });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      result: false,
      status: 500,
      error: e.errors,
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
    res.status(500).json({
      result: false,
      status: 500,
      error: e.errors,
    });
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
    res.status(500).json({
      result: false,
      status: 500,
      error: e.msg,
    });
  }
};

module.exports = {
  inviteMembers,
  confirmMember,
  reinviteMember,
  getManyMember,
  updateMember,
  deleteOneMember,
};
