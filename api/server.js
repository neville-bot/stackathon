const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const Twit = require('twit')

// middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "client")));
// env variable

const T = new Twit({
  consumer_key: process.ENV.consumer_key,
  consumer_secret: process.ENV.consumer_secret,
  access_token: process.ENV.access_token,
  access_token_secret: process.ENV.access_token_secret,
  timeout_ms: 60 * 1000,
  //    optional HTTP request timeout to apply to all requests.
  strictSSL: true
  // optional - requires SSL certificates to be valid.
})

// location data stream based on latitude/longitude bounded box(from twit)
const chicago = [-87.941313, 41.643179, -87.522772, 42.023758]
const params = {
  'user.fields': 'retweet_count:max_position,favorte_count,lang:en' // Edit optional query parameters here
}


app.get('/', async (req, res, next) => {
  try {
    T.get('search/tweets', {q: `${params}`, count: 1}, function(
      err,
      data,
      response
    ) {
      try {
        //   console.log('current tweets',data.statuses[0])
        //  const twitterId = data.statuses[0].id;
        //  const twitterRtCount = data.statuses[0].retweet_count;
        // let orderedTweets = findByRetweet(twitterId,twitterRtCount)
        // console.log(orderedTweets);
        res.json(data)
      } catch (err) {
        console.log(err)
      }
    })
  } catch (err) {
    next(err)
  }
})






// app.listen(process.env.PORT || 80);
