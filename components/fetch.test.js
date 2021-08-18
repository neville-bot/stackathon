import { dataFetch } from "./data";

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => Promise.resolve({}),
  });
});

it("recieves a JSON object when called", async () => {
  const jsonObj = await dataFetch();

  expect(jsonObj).toEqual({});
  expect(fetch).toHaveBeenCalledTimes(1);
});
