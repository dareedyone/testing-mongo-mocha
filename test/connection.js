const mongoose = require("mongoose");

//connect to db before test run
before(function (done) {
  //connect to mongodb
  mongoose.connect("mongodb://localhost/testaroo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  //check if connected and if error
  //same thing as the 3rd argument cb in mongo connect
  mongoose.connection
    .once("open", () => {
      console.log("connection made");
      //done tell the block to continue to next thing since its async
      done();
    })
    .on("error", (err) => console.log("conn error:", err));
});

//Drop the characters collection before each test
beforeEach(function (done) {
  //Drop the collection
  mongoose.connection.collections.mariochars.drop(function () {
    done();
  });
});
