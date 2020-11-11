const express = require("express");
const app = express();
const path = require("path");
const createError = require("http-errors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const apiRouter = require("./routes/index");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

app.use(cors());
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

app.use("/api/v1/", apiRouter);

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("mongoDB connected successful"))
  .catch((err) => console.error(err));

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
