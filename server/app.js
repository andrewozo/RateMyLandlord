const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");

app.use(morgan("dev"));

app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api", require("./api"));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "internal server error");
});

module.exports = app;
