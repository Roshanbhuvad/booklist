const http = require("http");
const config = require("./config");
const app = require("./app")();
const server = require('http').createServer(app);
require("./db/databaseConnection");
console.log(config.NODE_JS_PORT);

server.listen(config.NODE_JS_PORT);
console.log(`talenq api server listens on port ${config.NODE_JS_PORT}`);
console.log(`NODE_ENV = ${process.env.NODE_ENV || "development"}`);