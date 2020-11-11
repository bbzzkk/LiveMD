const { body, query, param } = require("express-validator");
const { teamService } = require("../../services/index");

exports.createTeam = [
  body("userId").notEmpty(),
  body("email").notEmpty(),
  body("teamname").notEmpty(),
  // .custom((teamname) => {
  //   teamService.getTeamByName(teamname).then((team) => {
  //     if (team !== null) {
  //       return Promise.reject("Teamname already in use");
  //     }
  //   });
  // }),
];
exports.getManyTeam = query("userId").notEmpty();
exports.getOneTeam = [param("teamId").notEmpty(), query("userId").notEmpty()];
exports.updateTeam = body("teamId").notEmpty();
exports.deleteTeam = param("teamId").notEmpty();
