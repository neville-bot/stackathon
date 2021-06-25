function parseTweet(tweets) {
  // tweets are an array of objects, every object is under
  // data. statuses, which is the array we receive
  let finalTweets = [];
  for (let i = 0; i < tweets.length; i++) {
    let id = tweets.id;
    let body = tweets.text;
    let user = tweets.user.name;
    let handle = tweets.user.screen_name;
    let date = tweets.user.created_at;
    let img = tweets.user.profile_background_image_url;
    let retweetCount = tweets.retweet_count;
    let favoriteCount = tweets.favorite_count;
    finalTweets.push({
      id: id,
      body: body,
      user: user,
      handle: handle,
      date: date,
      img: img,
      retweetCount: retweetCount,
      favoriteCount: favoriteCount,
    });
  }
  console.log("tweets after parsing", finalTweets);
  return finalTweets;
}

export default parseTweet;
