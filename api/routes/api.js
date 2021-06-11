const express = require("express");
const router = express.Router();
const passport = require("passport");

// // middleware
const bodyParser = require("body-parser");
const path = require("path");
router.use(passport.initialize());
router.use(passport.session());
router.use(express.static(path.join(__dirname, "client")));

// let consumerKey = process.env.REACT_APP_CONSUMER_KEY;
// let consumerSecret = process.env.REACT_APP_CONSUMER_SECRET;
// let accessToken = process.env.REACT_APP_ACCESS_TOKEN;
// let accessSecret = process.env.REACT_APP_ACCESS_TOKEN_SECRET;
console.log("I am RuNiNinggggg");

// // location data stream based on latitude/longitude bounded box(from twit)
const chicago = [-87.941313, 41.643179, -87.522772, 42.023758];
const params = {
  "user.fields": "location:`${chicago}`,favorte_count,lang:en", // Edit optional query parameters here
};
// const stream = T.stream("statuses/filter", { locations: chicago });
let max_position = 10;

// stream.on("tweet", function(tweet) {
//   console.log(tweet);
// });

router.get("/", (req, res, next) => {
  try {
    T.get("search/tweets", { q: `${params}`, count: 1 }, function(
      error,
      data,
      response
    ) {
      try {
        console.log("current tweets", data);
        // console.log("res data", response);
        // console.log("res from router", res);
        //  const twitterId = data.statuses[0].id;
        //  const twitterRtCount = data.statuses[0].retweet_count;
        // let orderedTweets = findByRetweet(twitterId,twitterRtCount)
        res.send(data);
      } catch (error) {
        console.log(error);
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
