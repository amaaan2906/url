const router = require("express").Router();
const rs = require("randomstring");

const URL = require("../models/url");

const { url: validURL } = require("../validation");

router.get("/:id", async (req, res) => {
	const { id: slug } = req.params;
	try {
		const exists = await URL.findOne({ slug: slug });
		if (exists) {
			exists.click += 1;
			exists.save();
			res.send(exists);
		}
		res.send("not found");
	} catch (error) {
		res.send("not found");
	}
});

router.post("/", async (req, res, next) => {
	var { slug, url } = req.body;
	try {
		// Check the "slug" 🐌
		if (!slug) {
			// Generate random "slug" if not entered by user
			slug = rs.generate({
				length: 6,
				capitalization: "lowercase",
			});
		} else {
			// Check if "slug" is available in database
			slug = slug.toLowerCase();
			const exists = await URL.findOne({ slug: slug });
			if (exists) throw new Error("Slug 🐌 in use.");
		}
		// Validate user data
		await validURL.validate({
			slug: slug,
			url: url,
		});
		const nURL = new URL({
			url: url,
			slug: slug,
		});
		const save = await nURL.save();
		res.json(save);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
