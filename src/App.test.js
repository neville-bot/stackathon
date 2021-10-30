// import dependencies
import React from "react";
// import component to test
import App from "./App";
// import react-testing utilities
import { waitFor, screen } from "@testing-library/react";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import "./utils";
import ReactDOM, { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container;
const tweetObj = {
  id: 123,
  img: "kitty.svg",
  user: "john",
  handle: "dough_boy",
  date: "12/3/18",
  body: "Hurry up and buy",
  favoriteCount: 100000,
  retweetCount: 3,
};
// what functionality do I want to test?
/*
 I want to test that we are fetching the data correctly.
 1) start with smoke test i.e. that app is rendering
 2) that the app is updating (rendering the twitter data)
 3)  that fetch formats the data correctly
 4) if the data is not returned that we return an error
*/
describe("testing fetch API", () => {
  beforeEach(() => {
    container = document.createElement("div");
    act(() => {
      document.body.appendChild(container);
    });
    // fetch.resetMocks();
  });
  afterEach(() => {
    // unmountComponentAtNode(container);
    container.remove();
    // document.body.removeChild(container);
    container = null;
  });
  // smoke test, testing first render (update screen)
  it("renders loading screen", () => {
    // act is jest-fetch-mock boilerplate that wraps components
    // for state changes

    act(() => {
      ReactDOM.render(<App />, container);
    });

    expect(
      screen.getByRole("article", { name: "stories" })
    ).toBeInTheDocument();
  });
});
// test second render (update)
// it("renders json object", () => {
//   // await waitFor(() => screen.getByRole("article"));
//   act(() => {
//     render(<App />, container);
//   });

//   expect(screen.getByRole("article")).toHaveTextContent("id");
// });

// it("useFetch Hook successfully returns data", () => {
//   fetch.mockResponseOnce(
//     JSON.stringify({
//       result: [{ id: 123, img: "image", user: "Mary" }],
//     })
//   );
//   useFetch("http://localhost:5000/").then((res) =>
//     expect(res.result).toEqual([{ id: 123, img: "image", user: "Mary" }])
//   );

//   expect(fetch.mockResponseOnce.calls.length).toEqual(1);
// });

// it("useFetch Hook sets sets is loading to true while running");

// it("returns an an error when there is an exception")
