const { CostExplorer } = require("aws-sdk");
const { body, query, param, check } = require("express-validator");
const { invitationService } = require("../../services");

const asyncFilter = async (members, predicate) =>
  Promise.all(members.map(predicate)).then((results) =>
    members.filter((_v, index) => results[index])
  );

exports.inviteMembers = body("members")
  .notEmpty()
  .isArray()
  .custom(async (members) => {
    const asyncResult = await asyncFilter(members, async ({ email, role }) => {
      check(email).isEmail();
      check(role).notEmpty();
      const inviteResult = await invitationService.getOneByEmail(email);
      return inviteResult === null;
    });
    if (!asyncResult.length) return Promise.reject("Already Invited");
  });

exports.confirmMember = body("code").notEmpty();
exports.reinviteMember = [body("email").notEmpty(), body("teamname").notEmpty];
exports.getManyMember = query("teamId").notEmpty();
exports.updateMember = [
  param("memberId").notEmpty(),
  body("userId").notEmpty(),
  body("teamId").notEmpty(),
];
exports.deleteOneMember = param("memberId").notEmpty();
