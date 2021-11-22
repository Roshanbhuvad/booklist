module.exports = {
  MONGO_DB_URL:
    "mongodb+srv://roshan:Roshan@152896@cluster0.yz8ss.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  NODE_JS_PORT: process.env.NODE_JS_PORT || 4000,
  NODE_JS_IP: process.env.NODEJS_IP || "0.0.0.0",

  REDIS: {
    PORT: 13051,
    HOST: "redis-13051.c264.ap-south-1-1.ec2.cloud.redislabs.com",
    PASSWORD: "xZoz28j5vwWVyz3mUZLOG0zjVuNthSOk",
  },
  PAGE_SIZE: 10,
};
/*module.exports = {
    MONGO_URI: 'YOUR_MONGODB_CONNECTION_STRING_GOES_HERE',
    REDIS_URI: 'YOUR_REDIS_CONNECTION_STRING_GOES_HERE'
  }; */
