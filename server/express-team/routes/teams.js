const router = require("express").Router();
const Team = require("../models/Team");
const Member = require("../models/Member");

// Create Team
router.post("/", async (req, res) => {
  try {
    const { userId, teamname, description } = req.body;

    if (!teamname) {
      return res.status(500).json({
        result: false,
        status: 500,
        error: "Teamname is required.",
      });
    }

    const team = await Team.findOne({
      teamname: teamname,
    }).catch((e) =>
      res.status(e.status).json({
        result: false,
        status: e.status,
        error: e.message,
      })
    );

    if (team) {
      return res.status(500).json({
        result: false,
        status: 500,
        error: "The name of team already exists.",
      });
    }

    await Team.create({
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

    await Member.create({
      teamId: team.teamId,
      userId: userId,
      role: "owner",
      status: "active",
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

    return res.status(200).json({ result: true, status: 200 });
  } catch (e) {
    res.status(e.status).json({
      result: false,
      status: e.status,
      error: e.message,
    });
  }
});

// get all Team by userId
router.get("/", async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId)
      res.status(500).json({
        result: false,
        status: 500,
        error: "You must send userId by query parameter.",
      });
    await Member.find({ userId: userId })
      .then((member) => res.status(200).json({ result: true, data: member }))
      .catch((e) =>
        res.status(e.status).json({
          result: false,
          status: e.status,
          error: e.message,
        })
      );
  } catch (e) {
    res.status(500).json({ result: false, error: e.message });
  }
});

// get one Team by teamId
router.get("/:teamId", async (req, res) => {
  try {
    const { teamId } = req.params;
    const team = await Team.findOne({ teamId: teamId }).catch((e) =>
      res.status(e.status).json({
        result: false,
        status: e.status,
        error: e.message,
      })
    );
    if (!team) {
      return res
        .status(404)
        .json({ result: false, status: 404, error: "Team Not Found" });
    }
    res.status(200).json({ result: true, status: 200, data: team });
  } catch (e) {
    res
      .status(e.status)
      .json({ result: false, status: e.status, error: e.message });
  }
});

// Update description by teamId
router.put("/:teamId", async (req, res) => {
  try {
    const { teamId, description } = req.body;
    const result = await Team.updateOne(
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
    return res.status(200).json({ result: true, status: 200 });
  } catch (e) {
    res
      .status(e.status)
      .json({ result: false, status: e.status, error: e.message });
  }
});

// Delete by teamId
router.delete("/:teamId", async (req, res) => {
  try {
    const { teamId } = req.params;
    const result = await Team.findOneAndDelete({ teamId: teamId }).catch((e) =>
      res.status(e.status).json({
        result: false,
        status: e.status,
        error: e.message,
      })
    );
    if (!result) {
      return res.status(404).json({
        result: false,
        status: 404,
        error: "Team Not Found. Cannot Delete Team.",
      });
    }
    await Member.deleteMany({ teamId: teamId }).catch((e) =>
      res.status(e.status).json({
        result: false,
        status: e.status,
        error: e.message,
      })
    );
    res.status(200).json({ result: true, status: 200 });
  } catch (e) {
    res
      .status(e.status)
      .json({ result: false, status: e.status, error: e.message });
  }
});

module.exports = router;
