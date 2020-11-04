const { teamService, memberService } = require("../services/index");
const { validationResult } = require("express-validator");

exports.createTeam = async (req, res) => {
  try {
    validationResult(req).throw();
    const { userId, teamname, description } = req.body;
    const team = await teamService.createTeam(teamname, description);
    await memberService.createMember(team.teamId, userId, "owner", "active");
    return res.status(200).json({ result: true, status: 200 });
  } catch (e) {
    res.status(e.status).json({
      result: false,
      status: e.status,
      error: e.message,
    });
  }
};

// get all Team by userId
exports.getManyTeam = async (req, res) => {
  try {
    validationResult(req).throw();
    const teams = await memberService.getAffiliatedTeams(req.query.userId);
    res.status(200).json({ result: true, status: 200, data: teams });
  } catch (e) {
    res
      .status(e.status)
      .json({ result: false, status: e.status, error: e.message });
  }
};

// get one Team by teamId
exports.getOneTeam = async (req, res) => {
  try {
    const team = teamService.getTeamById(req.params.teamId);
    if (!team) {
      return res
        .status(404)
        .json({ result: false, status: 404, error: "Team Not Found" });
    }
    res.status(200).json({ result: true, status: 200, data: team });
  } catch (e) {
    res
      .status(e.status)
      .json({ result: false, status: e.status, error: e.message });
  }
};

// Update description by teamId
exports.updateTeam = async (req, res) => {
  try {
    const { teamId, description } = req.body;
    await teamService.updateDescription(teamId, description);
    return res.status(200).json({ result: true, status: 200 });
  } catch (e) {
    res
      .status(e.status)
      .json({ result: false, status: e.status, error: e.message });
  }
};

// Delete by teamId
exports.deleteTeam = async (req, res) => {
  try {
    const { teamId } = req.params;
    const result = teamService.deleteTeam(teamId);
    if (!result) {
      return res.status(404).json({
        result: false,
        status: 404,
        error: "Team Not Found. Cannot Delete Team.",
      });
    }
    await memberService.deleteMany(teamId);
    res.status(200).json({ result: true, status: 200 });
  } catch (e) {
    res
      .status(e.status)
      .json({ result: false, status: e.status, error: e.message });
  }
};
