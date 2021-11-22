const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/default.config");
require("./db/databaseConnection");
require("./models/bookModel");
require("./helpers/redis.herlper");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

require("./routes/index")(app);

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
