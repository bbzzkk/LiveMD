const { body, query, param } = require("express-validator");
const { teamService } = require("../../services/index");

exports.createTeam = [
  body("userId").notEmpty(),
  body("teamname")
    .notEmpty()
    .custom((teamname) => {
      return teamService.getOneTeam(teamname).then((team) => {
        if (team.teamname === teamname) {
          return Promise.reject("Teamname already in use");
        }
      });
    }),
];
exports.getManyTeam = query("userId").notEmpty();
exports.getOneTeam = param("teamId").notEmpty();
exports.updateTeam = body("teamId").notEmpty();
exports.deleteTeam = param("teamId").notEmpty();
