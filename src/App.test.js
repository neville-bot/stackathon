import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("../utils/data", () => {
  return {
    convert: jest.fn().mockImplementation(() => {}),
  };
});

test("renders app properly", async () => {
  await render(<App />);
  const element = await screen.findAllByText(/twitterId/i);
  expect(element).toBeInTheDocument();
});
