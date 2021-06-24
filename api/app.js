const createError = require("http-errors"); // module to create HTTP errors
const express = require("express");
const path = require("path"); // module for file and directory paths
const cookieParser = require("cookie-parser"); // module for parsing cookies
const logger = require("morgan"); //logging middleware
const twitterRouter = require("./routes/api"); //twitter API route
const testAPIRouter = require("./routes/testAPI"); //twitter API route
const app = express();
const port = 5000;

// middleware
app.use(logger("dev"));
app.use(express.json()); // parses incoming request with JSON payloads (based on body-parser)
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// creating a path for the build folder, creating our react page first
app.use(express.static(path.join(__dirname, "..", "build")));
// serving static html file
app.use(express.static(path.join("../public/index.html")));

app.use("/", twitterRouter);
app.use("/testAPI", testAPIRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  // apparenlty render will throw error if your not using a view engine
  // res.render("error");
  // so instead usind res.json
  res.json({
    message: err.message,
    error: err,
  });
});

// any route not found on server side, we will send it to the client side route (index.html),
// which will handle that and display the client-side route page.

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});
// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

module.exports = app;
