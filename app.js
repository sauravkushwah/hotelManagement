const express = require("express");

const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

// code to connect to database

mongoose.connect("mongodb+srv://coolkiller:hacker91@rest-edqwg.mongodb.net/test?retryWrites=true&w=majority",
 { useNewUrlParser: true, useUnifiedTopology: true },()=>
	console.log("connected to database")
);

// Import routes
const postRoute = require("./routes/posts");

app.use('/posts', postRoute);

app.listen(3000);

