"use strict";

var express = require("express");

var mongoose = require("mongoose");

var dotenv = require("dotenv").config();

var cors = require("cors");

var app = express();

var authController = require('./controllers/authController');

var propertyController = require('./controllers/propertyController');

var uploadController = require('./controllers/uploadController');

var yachtController = require("./controllers/yachtController");

var userController = require("./controllers/userController");

var commentController = require("./controllers/commentController"); // db connecting


mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://username:<password>@database-name.tww1wcf.mongodb.net/?retryWrites=true&w=majority"); // middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('/images', express["static"]('public/images'));
app.use("/auth", authController);
app.use("/property", propertyController);
app.use("/yacht", yachtController);
app.use('/upload', uploadController);
app.use('/user', userController);
app.use('/comment', commentController); // starting server

var port = process.env.PORT || 5000;
app.listen(port, function () {
  return console.log("Server has been started");
});
//# sourceMappingURL=index.dev.js.map
