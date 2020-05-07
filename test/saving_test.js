const assert = require("assert");
const MarioChar = require("../models/mariochars");

describe("Saving records", function () {
  it("Saves a record to database", function (done) {
    var char = new MarioChar({
      name: "Mario",
    });

    char.save().then(function () {
      assert(char.isNew === false);
      done();
    });
  });
});
