const mongoose = require("mongoose");
const mongooseHidden = require("mongoose-hidden")();
const { getUuid } = require("../utils/index");

const MemberSchema = new mongoose.Schema({
	memberId: {
		type: String,
		required: true,
		unique: true,
		index: true,
		default: getUuid,
	},
	userId: {
		type: String,
		index: true,
	},
	teamId: {
		type: String,
		required: true,
		index: true,
	},
	email: {
		type: String,
		required: true,
		index: true,
	},
	role: {
		type: String,
		enum: ["owner", "admin", "writer", "reader"],
	},
	status: {
		type: String,
		required: true,
		default: "pending",
	},
});

MemberSchema.plugin(mongooseHidden, { hidden: { _id: true } });
module.exports = mongoose.model("Member", MemberSchema);
