import React, { useState, useEffect } from "react";
import "./App.css";
import parseTweet from "./utils";
import { Fragment } from "react";

function useFetch(url, opts) {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setError(false);
    setIsLoaded(true);
    async function fetchData() {
      try {
        await fetch(url, opts)
          .then((res) => res.json())
          .then((data) => parseTweet(data))
          .then((tweets) => setStories(tweets));
      } catch (error) {
        setError(true);
        setIsLoaded(false);
        console.error(error);
      }
      setIsLoaded(false);
    }
    fetchData();
  }, [url]);
  return [stories, error, isLoaded];
}

function App() {
  const [stories, error, isLoaded] = useFetch("http://localhost:5000/");

  return (
    <Fragment>
      {error && <div>Something went Wrong ...</div>}
      {isLoaded ? (
        <div>Loading...</div>
      ) : (
        <div className="main">
          <nav className="header">
            <h1>Impartial News</h1>
            <h2>Home</h2>
            <h2>Explore</h2>
            <h2>Lists</h2>
          </nav>
          <div>
            <div className="tweet-feed">
              {stories.map((story) => (
                <article id="tweets" key={story.id}>
                  <img
                    className="avatar"
                    src={story.img}
                    alt="twitter picture"
                  />
                  <div className="tweet-body">
                    <header className="tweet-header">
                      <h3 className="user">{story.user}</h3>
                      <h4 className="handle">@{story.handle}</h4>
                      <p className="date">{story.date}</p>
                    </header>

                    <p className="content">{story.body}</p>
                    <footer className="rt-bar">
                      <span>{story.favoriteCount}</span>
                      <span>{story.retweetCount}</span>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default App;

// is exporting explicitly for tests a thing?

// exports._test = {
//   callAPI: callAPI,
// };
