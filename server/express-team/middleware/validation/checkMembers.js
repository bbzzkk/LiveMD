const { body, query, param, check } = require("express-validator");

exports.inviteMembers = body("members").notEmpty().isArray();
// .custom(({ email, role }) => {
//   check(email).isEmail();
//   check(role).notEmpty();
// });

exports.confirmMember = body("code").notEmpty();
exports.getManyMember = query("teamId").notEmpty();
exports.updateMember = [
  param("memberId").notEmpty(),
  body("userId").notEmpty(),
  body("teamId").notEmpty(),
];
exports.deleteOneMember = param("memberId").notEmpty();
