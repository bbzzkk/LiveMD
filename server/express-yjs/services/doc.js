const Doc = require("../models/Doc");

exports.createDoc = async (docId, content = "") => {
  const date = new Date();
	const doc = await Doc.create({
		docId: docId,
    content: content,
    created: date,
    modified: date,
    active: 0
	});

	if (doc) {
		doc.save();
	}
};

exports.getDocById = async (docId) => await Doc.findOne({ docId: docId });

// Update content by docId
exports.updateContent = async (docId, content) =>
	await Doc.updateOne(
		{ docId: { $eq: docId } },
		{ $set: { content: content } },
		{ upsert: false }
  );

exports.updateModified = async docId =>
	await Doc.updateOne(
		{ docId: { $eq: docId } },
		{ $set: { modified: new Date() } },
		{ upsert: false }
	);

// Delete by docId
exports.deleteDoc = async (docId) =>
  await Doc.findOneAndDelete({ docId: docId });
