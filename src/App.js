import React, { useState, useEffect } from "react";
import "./App.css";
import parseTweet from "./utils";
import Header from "./Header";
import Tweets from "./Tweets";
function useFetch(url, opts) {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setError(false);
    setIsLoaded(true);
    const fetchTweets = async () => {
      try {
        await fetch(url, opts)
          .then((res) => res.json())
          .then((rawTweets) => parseTweet(rawTweets))
          .then((tweets) => setStories(tweets));
      } catch (error) {
        setError(true);
        setIsLoaded(false);
        console.error(error);
      }
      setIsLoaded(false);
    };
    fetchTweets();
  }, [url]);
  return [stories, error, isLoaded];
}

function App() {
  const [stories, error, isLoaded] = useFetch("http://localhost:5000/");

  return (
    <>
      {error && <div>Something went Wrong ...</div>}
      {isLoaded ? (
        <div>Loading...</div>
      ) : (
        <div className="main">
          <Header />
          <div className="tweet-feed">
            {stories.map((tweetObj) => (
              <Tweets key={tweetObj.id} tweet={tweetObj} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
