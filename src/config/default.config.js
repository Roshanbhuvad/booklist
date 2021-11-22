const path = require("path");
module.exports = {
  
  MONGO_DB_URL:
    "",
  NODE_JS_PORT: process.env.NODE_JS_PORT || 4000,
  NODE_JS_IP: process.env.NODEJS_IP || "0.0.0.0",

  REDIS: {
    PORT: 6379,
    IP: "127.0.0.1",
    AUTH_KEY: "ffnmz7m3yih5ycmqeq3qyw6m1ffnmz7m3yih5ycmqeq3qyw6m1",
  },

  
};
