const router = require("express").Router();
const Team = require("../models/Team");
const Member = require("../models/Member");

// Create Team
router.post("/", async (req, res) => {
  try {
    const { userId, teamname, description } = req.body;
    const isThereTeam = await Team.findOne({
      teamname: teamname,
    });

    if (isThereTeam) {
      return res.status(500).json({
        result: false,
        status: 500,
        error: "The name of team already exists.",
      });
    }
    const teamResult = await Team.create({
      teamname: teamname,
      description: description,
      createdAt: Date.now(),
      // thumbnailAttr,
    });

    await teamResult.save();

    const ownerResult = await Member.create({
      teamId: teamResult.teamId,
      userId: userId,
      role: "owner",
      status: "active",
    });
    await ownerResult.save();

    res.status(200).json({ result: true, status: 200 });
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
    const data = await Member.find({ userId: userId });
    res.status(200).json({ result: true, data: data });
  } catch (e) {
    res.status(500).json({ result: false, error: e.message });
  }
});

// get one Team by teamId
router.get("/:teamId", async (req, res) => {
  try {
    // const member = await Member.findOne({
    //   userId: req.query.userId,
    //   teamId: req.params.teamId,
    // });
    const { teamId } = req.params;
    const data = await Team.findOne({ teamId: teamId });
    if (!data) {
      return res
        .status(404)
        .json({ result: false, status: 404, error: "Team Not Found" });
    }
    res.status(200).json({ result: true, status: 200, data: data });
  } catch (e) {
    res
      .status(e.status)
      .json({ result: false, status: e.status, error: e.message });
  }
});

// Update by teamId
router.put("/:teamId", async (req, res) => {
  try {
    const { teamId, description, imageAttr } = req.body;
    // params uid
    // query imageURL
    // const imageURL = req.query.imageURL;
    // const result = await User.useFindAndModify({ uid: req.params.uid }, { dids: req.body.dids});
    const result = await await Team.update(
      { teamId: teamId },
      { $push: { description: description } }
      // { $push: { imageURLs: imageURL } }
    );
    if (!result) {
      return res
        .status(404)
        .json({ result: false, status: 404, error: "User Not Found" });
    }
    res.status(200).json({ result: true, status: 200 });
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
    const teamResult = await Team.findOneAndDelete({ teamId: teamId });
    if (!teamResult) {
      return res
        .status(404)
        .json({ result: false, status: 404, error: "Team Not Found" });
    }
    await Member.deleteMany({ teamId: teamId });
    res.status(200).json({ result: true, status: 200 });
  } catch (e) {
    res
      .status(e.status)
      .json({ result: false, status: e.status, error: e.message });
  }
});

module.exports = router;
