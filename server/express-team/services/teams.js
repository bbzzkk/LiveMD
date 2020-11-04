const Team = require("../models/Team");

exports.createTeam = (teamname, description) =>
  Team.create({
    teamname: teamname,
    description: description,
    createdAt: Date.now(),
  })
    .then((team) => team.save())
    .catch((e) =>
      res.status(e.status).json({
        result: false,
        status: e.status,
        error: e.message,
      })
    );

exports.getTeamByName = (teamname) =>
  Team.findOne({
    teamname: teamname,
  }).catch((e) =>
    res.status(e.status).json({
      result: false,
      status: e.status,
      error: e.message,
    })
  );

exports.getTeamById = (teamId) =>
  Team.findOne({ teamId: teamId }).catch((e) =>
    res.status(e.status).json({
      result: false,
      status: e.status,
      error: e.message,
    })
  );

// Update description by teamId
exports.updateDescription = (teamId, description) =>
  Team.updateOne(
    { teamId: { $eq: teamId } },
    { $set: { description: description } },
    { upsert: false }
  ).catch((e) =>
    res.status(e.status).json({
      result: false,
      status: e.status,
      error: e.message,
    })
  );

// Delete by teamId
exports.deleteTeam = async (teamId) =>
  await Team.findOneAndDelete({ teamId: teamId }).catch((e) =>
    res.status(e.status).json({
      result: false,
      status: e.status,
      error: e.message,
    })
  );
