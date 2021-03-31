// set env to test
process.env.NODE_ENV === "test";
import React from "react";
const assert = require("assert");
const callAPI = require("../src/App.js");
console.log("callapi", callAPI);

describe("Fetch", function() {
  before(function() {
    this.server = http.createServer(app).listen(3000);
  });
  describe("#callAPI()", function() {
    it("should call fetch when invoked, with no errors", function(done) {
      callAPI(done);
    });
    it("should return an object", function(done) {
      if (typeof (callAPI() === Object)) {
        return true;
      }
      return false;
    });
  });
  after(function(done) {
    this.server.close(done);
  });
});
