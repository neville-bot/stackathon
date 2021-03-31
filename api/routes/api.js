const express = require("express");
const router = express.Router();
const dotenv = require("dotenv").config({ path: "../.env" });

const passport = require("passport");
// twit client API integration.
const bodyParser = require("body-parser");
const path = require("path");
const Twit = require("twit");
// // middleware
router.use(passport.initialize());
router.use(passport.session());
router.use(express.static(path.join(__dirname, "client")));

// twit configuration
const T = new Twit({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret,
  timeout_ms: 60 * 1000,
  //    optional HTTP request timeout to apply to all requests.
  strictSSL: true,
  // optional - requires SSL certificates to be valid.
});

// // location data stream based on latitude/longitude bounded box(from twit)
const chicago = [-87.941313, 41.643179, -87.522772, 42.023758];
const params = {
  "user.fields": "retweet_count,favorte_count,lang:en", // Edit optional query parameters here
};

router.get("/", async (req, res, next) => {
  try {
    T.get("search/tweets", { q: `${params}`, count: 1 }, function(
      err,
      data,
      response
    ) {
      try {
        console.log("hitting ROUTE!!!");
        //   console.log('current tweets',data.statuses[0])
        //  const twitterId = data.statuses[0].id;
        //  const twitterRtCount = data.statuses[0].retweet_count;
        // let orderedTweets = findByRetweet(twitterId,twitterRtCount)
        // console.log(orderedTweets);
        console.log("twitter data no whammies no whammies", data);
        res.json(data);
      } catch (err) {
        console.log(err);
      }
    });
  } catch (err) {
    next(err);
  }
});

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
