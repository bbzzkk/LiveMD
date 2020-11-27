const { teamService, memberService } = require("../services/index");
const { validationResult } = require("express-validator");

exports.createTeam = async (req, res) => {
  try {
    console.log(req.body);
    validationResult(req).throw();
    const { userId, teamname, description, email } = req.body;
    await teamService.createTeam(teamname, description, userId, email);
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

// get all Team by userId
exports.getManyTeam = async (req, res) => {
  try {
    validationResult(req).throw();
    const teams = await memberService.getAffiliatedTeams(req.query.userId);
    console.log(teams);
    res.status(200).json({ result: true, status: 200, data: teams });
  } catch (e) {
    res.status(500).json({
      result: false,
      status: 500,
      error: e.errors,
    });
  }
};

// get one Team by teamId
exports.getOneTeam = async (req, res) => {
  try {
    validationResult(req).throw();
    const team = await teamService.getTeamById(req.params.teamId);
    if (!team) {
      return res
        .status(404)
        .json({ result: false, status: 404, error: "Team Not Found" });
    }
    const role = await memberService.getOnesRole(
      req.query.userId,
      req.params.teamId
    );

    res
      .status(200)
      .json({ result: true, status: 200, data: { role: role, team: team } });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      result: false,
      status: 500,
      error: e.errors,
    });
  }
};

// Update description by teamId
exports.updateTeam = async (req, res) => {
  try {
    validationResult(req).throw();
    const { teamId } = req.params;
    const { userId, description } = req.body;
    const result = await teamService.updateDescription(teamId, description);
    if (!result.nModified) {
      return res
        .status(500)
        .json({ result: false, status: 500, error: "Nothing changed" });
    }
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

// Delete by teamId
exports.deleteTeam = async (req, res) => {
  try {
    validationResult(req).throw();
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
    res.status(500).json({
      result: false,
      status: 500,
      error: e.errors,
    });
  }
};
