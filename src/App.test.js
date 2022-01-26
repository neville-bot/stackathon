import React from "react";
import App from "./App";
// react-testing utilities
import { waitFor, screen } from "@testing-library/react";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import "./utils";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container;

// what functionality do I want to test?
/*
 I want to test that the data is displaying correctly.
 1) start with smoke test i.e. that app is rendering
 2) that the app is updating (rendering dummy twitter data)
 3) that fetch formats the data correctly (no nulls or undefineds)
 4) if the data is not returned that we return an error

 To do:
  1) When in test environment, use the mock fetch to return dummy data
  2) When in test environment, use the mock fetch to return an error
  3) normal smoke test, app renders correctly.
  4) formats correctly, i.e. certain children exist and have text in them.

*/
describe("testing fetch API", () => {
  beforeEach(() => {
    container = document.createElement("div");
    act(() => {
      document.body.appendChild(container);
    });
  });
  afterEach(() => {
    container.remove();
  });
  // smoke test, testing first render (update screen)

  // test second render (update)
  it("renders tweets onto document", () => {
    // await waitFor(() => screen.getByRole("article"));
    act(() => {
      render(<App />, container);
    });

    expect(screen.getByRole("tweets")).toBeInTheDocument();
  });
});
//   it("renders loading screen", () => {
//     // act is jest-fetch-mock boilerplate that wraps components
//     // for state changes

//     act(() => {
//       render(<App isLoaded={true} />, container);
//     });

//     expect(screen.getByRole("loader")).toBeInTheDocument();
//   });
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
