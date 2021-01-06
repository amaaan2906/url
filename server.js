const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

require("dotenv").config();

// Database connect
const mongoUser = {
	id: process.env.MONGO_ID,
	pwd: process.env.MONGO_PWD,
};
const monogURL = `mongodb+srv://${mongoUser.id}:${mongoUser.pwd}@cluster0.qniui.mongodb.net/dev?retryWrites=true&w=majority`;
mongoose.connect(
	monogURL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log(`Connected to db!`)
);

app.use(express.static(path.join(__dirname, "client/build")));

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
