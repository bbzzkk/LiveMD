const Invitation = require("../models/Invitation");
const secretcode = require("../utils");

exports.create = (memberId, email, code) =>
  Invitation.create({
    memberId: memberId,
    email: email,
    code: code,
  })
    .then((invitation) => invitation.save())
    .catch((e) =>
      res.status(e.status).json({
        result: false,
        status: e.status,
        error: e.message,
      })
    );

exports.getOneByCode = (code) =>
  Invitation.findOne({ code: code }).catch((e) =>
    res.status(e.status).json({
      result: false,
      status: e.status,
      error: e.message,
    })
  );
