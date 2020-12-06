// Series of npm packages that we will use to give our server useful functionality

const express = require("express");
const fs = require("fs");

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

// require("./public/index.html")(app);

require("./routes/api")(app);
require("./routes/html")(app);

// The below code effectively "starts" our server

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
