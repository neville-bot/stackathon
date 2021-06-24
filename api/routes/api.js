const express = require("express");
const router = express.Router();
const passport = require("passport");
const Twit = require("../config/twit").Twit;
const T = Twit();

// // middleware
// const bodyParser = require("body-parser");
// const path = require("path");
// router.use(passport.initialize());
// router.use(passport.session());
// router.use(express.static(path.join(__dirname, "client")));

// // location data stream based on latitude/longitude bounded box(from twit)
const chicago = [-87.941313, 41.643179, -87.522772, 42.023758];
const params = {
  "user.fields": "location:`${chicago}`,favorte_count,lang:en", // Edit optional query parameters here
};
// const stream = T.stream("statuses/filter", { locations: chicago });
// stream.on("tweet", function(tweet) {
//   console.log(tweet);
// });
// T.get(
//   "search/tweets",
//   { q: `${params}`, count: 1 },

//   function(error, data, response) {
//     console.log(data);
//   }
// );
router.get("/", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  try {
    await T.get("search/tweets", { q: `${params}`, count: 1 }, function(
      error,
      data,
      response
    ) {
      // console.log("current tweets", data);
      // console.log("res data", response);
      // console.log("res from router", res);
      // const twitterId = data.statuses[0].id;
      //  const twitterRtCount = data.statuses[0].retweet_count;
      // let orderedTweets = findByRetweet(twitterId,twitterRtCount)
      console.log("data in express server", data.statuses[0].text);
      res.send(data.statuses[0].text);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
