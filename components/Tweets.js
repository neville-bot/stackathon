import React from "react";
import "./App.css";
function Tweets(props) {
  const {
    id,
    image,
    user,
    handle,
    date,
    body,
    favoriteCount,
    retweetCount,
  } = props.tweet;
  return (
    <>
      <article id="tweets" key={id}>
        <img className="avatar" src={image} alt="twitter picture" />
        <div className="tweet-body">
          <header className="tweet-header">
            <h3 className="user">{user}</h3>
            <h4 className="handle">@{handle}</h4>
            <p className="date">{date}</p>
          </header>

          <p className="content">{body}</p>
          <footer className="rt-bar">
            <span>{favoriteCount}</span>
            <span>{retweetCount}</span>
          </footer>
        </div>
      </article>
    </>
  );
}

export default Tweets;
