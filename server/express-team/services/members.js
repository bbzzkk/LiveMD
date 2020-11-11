const Member = require("../models/Member");

exports.create = (userId, teamId, role, email, status) => {
  return Member.create({
    teamId: teamId,
    userId: userId,
    role: role,
    email: email,
    status: status,
  }).then((member) => member.save());
};

exports.getOneByEmail = (email) =>
  Member.findOne({
    email: email,
  });

exports.getManyByteamId = (teamId) =>
  Member.find({
    teamId: teamId,
  });

exports.getAffiliatedTeams = (userId) =>
  Member.find({ userId: userId }).catch((e) =>
    res.status(e.status).json({
      result: false,
      status: e.status,
      error: e.message,
    })
  );

exports.getOnesRole = async (userId, teamId) =>
  await Member.findOne()
    .where("userId")
    .equals(userId)
    .where("teamId")
    .equals(teamId)
    .then((member) => member.role);

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
