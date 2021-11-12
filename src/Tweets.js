import React from "react";
import "./Tweets.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ReplyIcon from "@material-ui/icons/Reply";
import RepeatIcon from "@material-ui/icons/Repeat";
function Tweets(props) {
  const {
    id,
    img,
    user,
    handle,
    date,
    body,
    favoriteCount,
    retweetCount,
  } = props.tweet;
  return (
    <>
      <article id="tweet" key={id}>
        <img className="tweet-avatar" src={img} alt="twitter profile" />
        <section className="tweet-body">
          <header className="tweet-body--header">
            <h3 className="user">{user}</h3>
            <h4 className="handle">@{handle}</h4>
            <time className="date">{date}</time>
          </header>
          <p className="tweet-content">{body}</p>
          <footer className="tweet-rtBar">
            <span>
              <i className="material-icons">
                {" "}
                <ReplyIcon />{" "}
              </i>
            </span>
            <span>
              <i className="material-icons">
                {" "}
                <RepeatIcon />{" "}
              </i>
              {retweetCount}
            </span>
            <span>
              <i className="material-icons">
                {" "}
                <FavoriteBorderIcon />{" "}
              </i>
              {favoriteCount}
            </span>
          </footer>
        </section>
      </article>
    </>
  );
}

export default Tweets;
