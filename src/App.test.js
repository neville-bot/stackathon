import React from "react";
import App from "./App";
import { useFetch } from "./utils";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";

// what functionality do I want to test?
/*
 I want to test that we are fetching the data correctly.
 1) check that the fetch call is being made
 2) the fetch call is returning an object
 3) the data is formatted correctly
 4) if the data is not returned that we return an error

 start with smoke test i.e. that app is rendering
*/
describe("testing fetch API", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  // smoke test
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("useFetch Hook successfully returns data", () => {
    fetch.mockResponseOnce(JSON.stringify({ data: "fake data" }));

    useFetch();
  });

  it("returns a JSON object");

  it("returns an exception when theres an error");
});
