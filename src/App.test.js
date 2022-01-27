import React from "react";
import App from "./App";
import { useFetch } from "./utils";
// react-testing utilities
import { waitFor, screen } from "@testing-library/react";
import { mount } from "enzyme";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import "./utils";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
// import Adapter from "enzyme-adapter-react-15";
// Enzyme.configure({ adapter: new Adapter() });
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
// jest.mock("./utils", () => {
//   return {
//     useFetch: jest.fn(() => {}),
//   };
// });

describe("testing fetch API", () => {
  beforeEach(() => {
    container = document.createElement("div");
    act(() => {
      document.body.appendChild(container);
    });
  });
  afterEach(() => {
    container.remove();
    jest.clearAllMocks();
  });
  // smoke test, testing first render (update screen)

  // test second render (update)
  it("renders tweets onto document", () => {
    act(() => {
      render(<App />, container);
    });

    expect(screen.getByRole("tweets")).toBeInTheDocument();
  });
  // it("renders loading screen", () => {
  /*
      We want to render (or mount), check that the screen is loading. Wait for the data to load, and then check that the screen
      correctly renders the data.
    */
  // act(() => {
  //   render(<App isLoaded={true} />, container);
  // });
  //     const wrapper = mount(<App />);
  //     expect(wrapper.find("h1").text()).toBe("Loading...");
  //     // wait for the data to load
  //     waitFor(() => {
  //       wrapper.update();
  //       expect(wrapper.find("tweets").text()).toBe("dough_boy");
  //     });
  //   });
  // });

  it("returns an an error when there is an exception", () => {
    act(() => {});
  });
});
