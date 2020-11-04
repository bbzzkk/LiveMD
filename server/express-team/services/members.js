const Member = require("../models/Member");

exports.create = (userId, teamId, role, status) =>
  Member.create({
    teamId: teamId,
    userId: userId,
    role: role,
    status: status,
  })
    .then((member) => {
      member.save();
    })
    .catch((e) =>
      res.status(e.status).json({
        result: false,
        status: e.status,
        error: e.message,
      })
    );

exports.getOneByEmail = (email) =>
  Member.findOne({
    email: email,
  }).catch((e) =>
    res.status(e.status).json({
      result: false,
      status: e.status,
      error: e.message,
    })
  );

exports.getManyByteamId = (teamId) => {
  Member.find({
    teamId: teamId,
  }).catch((e) =>
    res.status(e.status).json({
      result: false,
      status: e.status,
      error: e.message,
    })
  );
};

exports.getAffiliatedTeams = (userId) =>
  Member.find({ userId: userId }).catch((e) =>
    res.status(e.status).json({
      result: false,
      status: e.status,
      error: e.message,
    })
  );

exports.getOnesRole = (userId, teamId) =>
  Member.findOne({
    userId: userId,
    teamId: teamId,
  }).role.catch((e) =>
    res.status(e.status).json({
      result: false,
      status: e.status,
      error: e.message,
    })
  );

exports.updateStatus = (memberId) =>
  Member.updateOne(
    { memberId: { $eq: memberId } },
    { $set: { status: "active" } },
    {
      upsert: false,
    }
  )
    .then(() => console.log("Change Member Status"))
    .catch((e) =>
      res.status(e.status).json({
        result: false,
        status: e.status,
        error: e.message,
      })
    );

exports.updateRole = (memberId, role) =>
  Member.updateOne(
    { memberId: { $eq: memberId } },
    { $set: { role: role } },
    {
      upsert: false,
    }
  ).catch((e) =>
    res.status(e.status).json({
      result: false,
      status: e.status,
      error: e.message,
    })
  );

exports.deleteOne = (memberId) =>
  Member.deleteOne({ memberId: memberId }).catch((e) =>
    res.status(e.status).json({
      result: false,
      status: e.status,
      error: e.message,
    })
  );

exports.deleteMany = (teamId) =>
  Member.deleteMany({ teamId: teamId }).catch((e) =>
    res.status(e.status).json({
      result: false,
      status: e.status,
      error: e.message,
    })
  );
