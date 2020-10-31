const router = require("express").Router();
const Team = require("../models/Team");
const Member = require("../models/Member");

// Create Team
router.post("/", async (req, res) => {
  try {
    const isThereTeam = await Team.findOne({
      teamname: req.body.teamname,
    });

    if (isThereTeam) {
      return res.json({
        result: false,
        status: 409,
        error: "The name of team already exists.",
      });
    }

    const teamResult = await Team.create({
      teamname: req.body.teamname,
      description: req.body.description || "",
      createdAt: Date.now(),
      // thumbnailAttr,
    });
    await teamResult.save();

    const ownerResult = await Member.create({
      teamId: teamResult.get(teamId),
      userId: req.body.userId,
      role: "owner",
      // thumbnailAttr,
    });
    await ownerResult.save();

    res.json({ result: true, status: 200 });
  } catch (e) {
    res.json({
      result: false,
      status: e.status,
      error: e.message,
    });
  }
});

// get one Team by teamId
router.get("/:teamId", async (req, res) => {
  try {
    const result = await Team.findOne({ uid: req.params.teamId });
    if (!result) {
      return res.status(404).json({ result: false, error: "Team not found" });
    }
    res.json({ result: true, result });
  } catch (e) {
    res.status(500).json({ result: false, error: e.message });
  }
});

// Update by teamId
router.put("/:teamId", async (req, res) => {
  try {
    // params uid
    // query imageURL
    // const imageURL = req.query.imageURL;
    // const result = await User.useFindAndModify({ uid: req.params.uid }, { dids: req.body.dids});
    const result = await await Team.update(
      { teamId: req.params.teamId },
      { $push: { description: description } }
      // { $push: { imageURLs: imageURL } }
    );
    if (!result) {
      return res.json({ result: false, status: 404, error: "User not found" });
    }
    res.json({ result: true });
  } catch (e) {
    res.json({ result: false, status: e.status, error: e.message });
  }
});

// Delete by teamId
router.delete("/:teamId", async (req, res) => {
  try {
    const result = await Team.findOneAndDelete({ teamId: req.params.teamId });
    if (!result) {
      return res.json({ result: false, status: 404, error: "Team not found" });
    }
    res.json({ result: true });
  } catch (e) {
    res.json({ result: false, status: e.status, error: e.message });
  }
});

module.exports = router;
