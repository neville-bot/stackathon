const express = require("express");
const router = express.Router();
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
  "user.fields": `location: ${chicago},favorte_count,lang:en`, // Edit optional query parameters here
};

router.get("/", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  try {
    await T.get("search/tweets", { q: `${params}`, count: 10 }, function(
      error,
      data,
      response
    ) {
      res.send(data);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
