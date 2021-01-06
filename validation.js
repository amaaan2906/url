const yup = require("yup");

const url = yup.object().shape({
	slug: yup
		.string()
		.trim()
		.lowercase()
		.matches(/^[\w\-]+$/i),
	url: yup.string().trim().url().required(),
});

module.exports = {
	url,
};
