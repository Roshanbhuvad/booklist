

const redis = require("redis");
const { REDIS } = require("../config/default.config");

const config = require("../config/default.config");

let client = redis.createClient(REDIS.PORT, REDIS.IP);

if (process.env.NODE_ENV == "production") {
  //Works on server
  client.auth(config.redisAuthKey, function (err) {
   console.log("Redis server authenticated");
  });
}

client.on("connect", () => {
 console.log("Redis server connected");
});

client.on("error", function (err) {
  console.log("Redis server connection failed");
});

const set = async (key, value) => {
  await client.set(key, JSON.stringify(value), (error, result) => {
    if (error)
      console.log("Failed to set cache");
    return result;
  });
};

const get = async (key) => {
  return new Promise((resolve) => {
    client.get(key, function (err, result) {
      resolve(JSON.parse(result));
    });
  });
};

const remove = async (key) => {
  await client.del(key, function (err, result) {
    return result;
  });
};

module.exports = {
  set,
  get,
  remove,
};
