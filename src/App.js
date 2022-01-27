import React from "react";
import "./App.css";
import useFetch from "./utils";
import Header from "./Sidebar";
import Tweets from "./Tweets";

function App() {
  const [stories, isError, isLoaded] = useFetch("http://localhost:5000");

  if (isError) {
    return <div>Error occured fetching data...</div>;
  }
  if (isLoaded) {
    return (
      <main id="main">
        <Header />
        <img src="#" alt="loader" name="loader" className="loader"></img>
      </main>
    );
  }
  return (
    <main id="main">
      <Header />
      <article className="tweet-feed" role="tweets">
        {stories.map((tweetObj) => (
          <Tweets key={tweetObj.id} tweet={tweetObj} />
        ))}
      </article>
    </main>
  );
}

export default App;
