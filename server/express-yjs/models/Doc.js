const mongoose = require("mongoose");

const DocSchema = new mongoose.Schema({
	docId: {
		type: String,
		required: true,
		unique: true,
	},
	content: {
		type: String,
	},
	created: {
		type: Date,
	},
	modified: {
		type: Date,
	},
	active: {
		type: Number,
	},
});

module.exports = mongoose.model("Doc", DocSchema);
