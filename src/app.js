require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const favicon = require("serve-favicon");
const { notFound, errorHandler } = require("./middleware/errorHandler");
const { apiRoute, viewsRoute } = require("./routes");
const bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(favicon(path.join(__dirname, "../public/favicon.ico")));

/**
 * Ejs setup
 */
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/api/v1", apiRoute);
app.use(viewsRoute);

// Middleware to handle errors
app.use(notFound);
app.use(errorHandler);

module.exports = app;
