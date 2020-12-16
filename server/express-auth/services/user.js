const { JWT_SECRET } = require("../configuration");
const JWT = require("jsonwebtoken");
const crypto = require("crypto");
const db = require("../helpers/db");

module.exports = {
	authenticate,
	refreshToken,
	revokeToken,
	getAll,
	getById,
	getRefreshTokens,
};

signToken = (user) => {
	return JWT.sign(
		{
			iss: "yzz",
			sub: user.userId,
			iat: new Date().getTime(), // current time
			exp: new Date().setDate(new Date().getDate() + 1), // current time + 1 day ahead
		},
		JWT_SECRET
	);
};

const randomTokenString = () => crypto.randomBytes(40).toString("hex");

const generateRefreshToken = (user, ipAddress) =>
	db.RefreshToken.create({
		userId: user.id,
		token: randomTokenString(),
		expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
		createdByIp: ipAddress,
	}).then((token) => token.save());

const basicDetails = (user) => {
	const { userId, username, email, thumbnail } = user;
	return { userId, username, email, thumbnail };
};

async function authenticate({ profile, ipAddress }) {
	const { googleId, name, imageUrl, email } = profile;
	let user = await db.User.findOne({ googleId: googleId });
	let refreshToken = null;
	if (!user) {
		user = await db.User.create({
			googleId: googleId,
			username: name,
			thumbnail: imageUrl,
			email: email,
		}).then((user) => user.save());
		refreshToken = generateRefreshToken(user, ipAddress);
	}
	refreshToken = await db.RefreshToken.find({
		userId: user.id,
	});
	const jwtToken = signToken(user);

	return {
		...basicDetails(user),
		jwtToken,
		refreshToken: refreshToken.token,
	};
}

async function refreshToken({ token, ipAddress }) {
	const refreshToken = await getRefreshToken(token);
	const { user } = refreshToken;

	const newRefreshToken = generateRefreshToken(user, ipAddress);
	refreshToken.revoked = Date.now();
	refreshToken.revokedByIp = ipAddress;
	refreshToken.replacedByToken = newRefreshToken.token;
	await refreshToken.save();
	await newRefreshToken.save();

	const jwtToken = generateJwtToken(user);

	return {
		...basicDetails(user),
		jwtToken,
		refreshToken: newRefreshToken.token,
	};
}

async function revokeToken({ token, ipAddress }) {
	const refreshToken = await getRefreshToken(token);

	refreshToken.revoked = Date.now();
	refreshToken.revokedByIp = ipAddress;
	await refreshToken.save();
}

async function getAll() {
	const users = await db.User.find();
	return users.map((x) => basicDetails(x));
}

async function getById(id) {
	const user = await getUser(id);
	return basicDetails(user);
}

async function getRefreshTokens(userId) {
	await getUser(userId);

	const refreshTokens = await db.RefreshToken.find({ user: userId });
	return refreshTokens;
}

async function getUser(id) {
	if (!db.isValidId(id)) throw "User not found";
	const user = await db.User.findById(id);
	if (!user) throw "User not found";
	return user;
}

async function getRefreshToken(token) {
	const refreshToken = await db.RefreshToken.findOne({ token }).populate(
		"user"
	);
	if (!refreshToken || !refreshToken.isActive) throw "Invalid token";
	return refreshToken;
}
