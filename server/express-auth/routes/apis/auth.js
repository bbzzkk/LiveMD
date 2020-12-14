const router = require("express-promise-router")();
const passport = require("passport");
const passportConfig = require("../../middleware/passport");
const { AuthController } = require("../../controllers/index");
const passportJWT = passport.authenticate("jwt", { session: false });

router.post("/signin", AuthController.signIn);
router.get("/signout", AuthController.signOut);
router.get(
	"/google",
	passport.authenticate("google", {
		session: false,
		scope: ["profile"],
	})
);

router.get(
	"/google/redirect",
	passport.authenticate("google"),
	AuthController.googleOAuth
	// (req, res, err) => {
	//   if (err.name === "TokenError") {
	//      // redirect them back to the login page
	//   } else {
	//     res.redirect("http://localhost:3000");
	//     // res.json(req.user);
	//   }
	// }
);

// router.post(
//   "/google",
//   passport.authenticate("googleToken", {
//     session: false,
//     scope: ["profile", "email"],
//   }),
//   AuthController.googleOAuth
// );
router.get("/signout", passportJWT, AuthController.signOut);
// router.get("/:id/refresh-tokens", authorize(), getRefreshTokens);

// router.post("/refresh-token", refreshToken);
// router.post("/revoke-token", authorize(), revokeTokenSchema, revokeToken);

module.exports = router;
