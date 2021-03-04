const assert = require("assert");
const callAPI = require("../src/App.js");

describe("Fetch", function() {
  describe("#callAPI()", function() {
    it("should call fetch when invoked, with no errors", function(done) {
      callAPI(done);
    });
  });
});
