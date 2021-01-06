const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

// Database connect
const mongoUser = {
	id: "express-app",
	pwd: "express",
};
const monogURL = `mongodb+srv://${mongoUser.id}:${mongoUser.pwd}@cluster0.qniui.mongodb.net/dev?retryWrites=true&w=majority`;
mongoose.connect(
	monogURL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log("Connected to db!")
);

app.use(express.static(path.join(__dirname, "client")));

//Middle wares
app.use(morgan("tiny"));
app.use(express.json());

// Routes
app.use("/to", require("./routes/url"));

// Error handler
app.use((error, req, res, next) => {
	if (error.status) res.status(error.status);
	else res.status(500);
	res.json({
		msg: error.message,
		stack: process.env.NODE_ENV === "production" ? "☠" : error.stack,
	});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running at ${PORT}`);
});
