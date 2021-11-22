const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
//const passport = require("passport");

const compression = require("compression");
const mongoose = require("mongoose");

const config = require("./config");



var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));

const handleUnhandledOperation = () => {
  process
    .on("unhandledRejection", (err) => {
      logger.error({
        message: "Unhandled Rejection at Promise",
        stackTrace: err.stack,
      });
    })
    .on("uncaughtException", (err) => {
      //logger.error("Uncaught Exception thrown",{data:{err}});
      logger.error({ stackTrace: err, message: "Uncaught Exception thrown" });
      process.exit(1);
    });
};

module.exports = () => {
  // To handle unhandled rejection or exception
  handleUnhandledOperation();
  app.use(function (req, res, next) {
    console.log("MONGO_DB_URL", config.MONGO_DB_URL);
    res.header("Access-Control-Allow-Origin", config.CORS.ORIGIN);
    res.header("Access-Control-Allow-Headers", config.CORS.HEADERS);
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    next();
  });
  //app.use(passport.initialize());
  app.use("/api", (req, res, next) => {
    res.set("Content-Type", "application/json");
    next();
  });
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(require("cookie-parser")());
  app.use(compression());
  
  //app.use(passport.session());
  app.use("/api/v2", require("./routes"));
  app.use("*", (req, res) => res.status(404).json("Page not found"));
  return app;
};
