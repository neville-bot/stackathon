// This file is automatically exectuted before running tests.

// set up mocking via jest-fetch-mock for mock HTTP requests
require("jest-fetch-mock").enableMocks();

// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import "@testing-library/jest-dom";

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;
