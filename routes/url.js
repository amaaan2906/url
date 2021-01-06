const router = require("express").Router();
const rs = require("randomstring");
const rateLimit = require("express-rate-limit");
const slowDown = require("express-slow-down");

const URL = require("../models/url");

const { url: validURL } = require("../validation");

router.get("/:id", async (req, res) => {
	const { id: slug } = req.params;
	try {
		const exists = await URL.findOne({ slug: slug });
		if (exists) {
			exists.click += 1;
			exists.save();
			res.redirect(exists.url);
		}
		res.send("not found");
	} catch (error) {
		next(error);
	}
});

router.post(
	"/",
	slowDown({
		windowMs: 5 * 60 * 1000, // 5 minutes
		delayAfter: 10, // slow each IP after 10 requests per windowMs
		delayMs: 30 * 1000, // adding 30s of delay per request above 10
	}),
	rateLimit({
		windowMs: 5 * 60 * 1000, // 5 minutes
		max: 10, // limit each IP to 10 requests per windowMs
	}),
	async (req, res, next) => {
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
	}
);

module.exports = router;
