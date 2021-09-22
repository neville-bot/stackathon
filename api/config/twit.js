const Twit = require("twit");
require("dotenv").config({ path: "../.env" });

// twit configuration
const T = new Twit({
  consumer_key: process.env.REACT_APP_CONSUMER_KEY,
  consumer_secret: process.env.REACT_APP_CONSUMER_SECRET,
  access_token: process.env.REACT_APP_ACCESS_TOKEN,
  access_token_secret: process.env.REACT_APP_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000, //    optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
});
//   app_only_auth: true,

module.exports.Twit = () => {
  return T;
};
