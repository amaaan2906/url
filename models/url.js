const mongoose = require("mongoose");

const urlModel = new mongoose.Schema({
	url: {
		type: String,
		required: true,
	},
	slug: {
		type: String,
		required: true,
	},
	createdDate: {
		type: Number,
		default: Date.now,
	},
	click: {
		type: Number,
		default: 0,
	},
	created: {
		type: String,
		required: true,
		default: "public",
	},
});

module.exports = mongoose.model("URL", urlModel);
