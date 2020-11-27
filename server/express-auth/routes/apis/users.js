const router = require("express-promise-router")();
const passport = require("passport");

const { UsersController } = require("../../controllers/index");
const passportJWT = passport.authenticate("jwt", { session: false });

router.get("/:id", passport.authenticate("jwt"), UsersController.getById);
// router.get("/status", passportJWT, UsersController.checkAuth);

module.exports = router;
