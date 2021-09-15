export default function parseTweet(tweet) {
  // tweets are an array of objects, every object is under
  // data. statuses, which is the array we receive
  const finalTweets = [];
  const tweets = tweet.statuses;
  console.log("before parsing", tweets[0].text);

  for (let i = 0; i < tweets.length; i++) {
    const id = tweets[i].id;
    const body = tweets[i].text;
    const user = tweets[i].user.name;
    const handle = tweets[i].user.screen_name;
    const date = millisToMinutesAndSeconds(
      Date.now() - Date.parse(tweets[i].created_at)
    );
    const img = tweets[i].user.profile_image_url_https;
    const retweetCount = tweets[i].retweet_count;
    const favoriteCount = tweets[i].favorite_count;
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
  return finalTweets;
}

function millisToMinutesAndSeconds(millis) {
  const hours = Math.floor(millis / 3600000);
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  // if there is less than 60 seconds, we post seconds
  if (seconds < 60) {
    return seconds + "s";
  }
  // if there is less than 60 minutes, we want to post the minutes
  else if (minutes < 60) {
    return minutes + "m";
  }
  // else we want to post the hours
  else {
    return hours + "h";
  }
}
