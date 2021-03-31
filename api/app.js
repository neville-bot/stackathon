// var createError = require("http-errors");
var express = require("express");
var path = require("path");

// var cookieParser = require("cookie-parser");
// var logger = require("morgan");

var indexRouter = require("./routes/index");
var twitterRouter = require("./routes/api");

var app = express();

// view engine setup(for jade)
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

// middleware

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// creating a path for the build folder, creating our react page first
app.use(express.static(path.join(__dirname, "..", "build")));
// serving static html file

app.use(express.static(path.join("../public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public", "index.html"));
// });

app.use("/", indexRouter);
app.use("/api", twitterRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   // apparenlty render will throw error if your not using a view engine
//   // res.render("error");
//   // so instead usind res.json
//   res.json({
//     message: err.message,
//     error: err,
//   });
// });

// any route not found on server side, we will send it to the client side route (index.html),
// which will handle that and display the client-side route page.

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});

module.exports = app;
