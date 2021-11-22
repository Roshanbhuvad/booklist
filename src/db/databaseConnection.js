const mongoose = require("mongoose");
const config = require("../config/default.config");
const bluebird = require("bluebird");

mongoose.Promise = bluebird;
//console.log("========================================", config.MONGO_DB_URL);
mongoose.connect(config.MONGO_DB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", () => {
  console.log("Mongo DB connection error:");
});
db.once("open", function () {
  console.log("Connected to MongoDB :: " + config.MONGO_DB_URL);
});
