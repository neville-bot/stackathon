import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  function callAPI() {
    fetch("api", {})
      .then(setIsLoaded(true))
      .then(
        (data) => setStories(data),
        console.log("stories", stories),
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }

  useEffect(() => {
    callAPI();
  }, []);
  if (error) {
    return <div> Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Custom Location</h3>
          <h1>Partisan news</h1>
          <h3>Current Location</h3>
        </header>
        <div>
          <ul>
            {/* {stories.trendingStories.map((story) => (
            <div>
              <li key={story.id}></li>
              <a>{story.name}</a>
            </div>
          ))} */}
          </ul>
          <div className="tweet-container">
            <article className="tweets">
              <p>
                Lorem ipsum door sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himnaeos.{" "}
              </p>
            </article>

            <article className="tweets">
              <p>
                Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
                Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
                sem at dolor. Maecenas mattis. Sed convallis tristique sem.
                Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus,
                iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
                quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus,
                ullamcorper vel, tincidunt sed, euismod in, nibh.{" "}
              </p>
            </article>

            <article className="tweets">
              <p>
                Quisque volutpat condimentum velit. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor
                neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla
                facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a
                tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam
                ultrices. Suspendisse in justo eu magna luctus suscipit.{" "}
              </p>
            </article>

            <article className="tweets">
              <p>
                Sed lectus. Integer euismod lacus luctus magna. Quisque cursus,
                metus vitae pharetra auctor, sem massa mattis sem, at interdum
                magna augue eget diam. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae; Morbi lacinia
                molestie dui. Praesent blandit dolor. Sed non quam. In vel mi
                sit amet augue congue elementum. Morbi in ipsum sit amet pede
                facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel,
                egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut
                ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui
                quis est pulvinar ullamcorper. Nulla facilisi.{" "}
              </p>
            </article>

            <article className="tweets">
              <p>
                Integer lacinia sollicitudin massa. Cras metus. Sed aliquet
                risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis,
                venenatis tristique, dignissim in, ultrices sit amet, augue.
                Proin sodales libero eget ante. Nulla quam. Aenean laoreet.
                Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu,
                pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet
                eget, justo.{" "}
              </p>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// is exporting explicitly for tests a thing?

// exports._test = {
//   callAPI: callAPI,
// };
