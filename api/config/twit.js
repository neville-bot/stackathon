const Twit = require("twit");
require("dotenv").config({ path: "../.env" });

// twit configuration
const T = new Twit({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  access_token: env.access_token,
  access_token_secret: env.access_token_secret,
  timeout_ms: 60 * 1000, //    optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
});
//   app_only_auth: true,

module.exports.Twit = () => {
  return T;
};
