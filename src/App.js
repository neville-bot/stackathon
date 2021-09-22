import React, { useState, useEffect } from "react";
import "./App.css";
import useFetch from "./utils";
import Header from "./Header";
import Tweets from "./Tweets";

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
