const express = require("express");
const app = express();
const path = require("path");
const createError = require("http-errors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
<<<<<<< HEAD
const multer = require("multer");

require("dotenv").config();

const databaseUrl = process.env.DATABASE_URL;
const databasePort = process.env.DATABASE_PORT;
const databaseName = process.env.DATABASE_NAME;

app.use(cors());
=======
// var autoIncrement = require("mongoose-auto-increment");
const multer = require("multer");

app.use(cors());

>>>>>>> ba7765e289ba0dd8d633626fc77c65197f1e6789
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

mongoose.Promise = global.Promise;
mongoose
  .connect(`mongodb://${databaseUrl}:${databasePort}/${databaseName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("mongoDB connected successful"))
  .catch((err) => console.error(err));
// autoIncrement.initialize(connection);

const teamsRouter = require("./routes/teams");
const membersRouter = require("./routes/members");

app.use("/teams", teamsRouter);
app.use("/members", membersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
