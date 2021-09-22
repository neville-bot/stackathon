// This file is automatically exectuted before running tests.

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
