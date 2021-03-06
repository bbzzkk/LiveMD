const Invitation = require("../models/Invitation");

exports.create = (memberId, email, code) =>
  Invitation.create({
    memberId: memberId,
    email: email,
    code: code,
  }).then((invitation) => invitation.save());

exports.getOneByEmail = (email) => Invitation.findOne({ email: email });
exports.getOneByCode = (code) => Invitation.findOne({ code: code });
