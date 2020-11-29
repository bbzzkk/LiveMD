const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const logger = require("morgan");
const bodyParser = require("body-parser");

console.log("TESTTEST");
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://live-md.com:27017/LiveMD", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("mongoDB connected successful"))
  .catch((err) => console.error("test"));
const app = express();

// app.use(cors());
// function corsCheck(req, callback) {
//   let corsOptions;
//   const acceptList = ["http://localhost:3000"];
//   if (acceptList.indexOf(req.header("Origin")) !== -1) {
//     corsOptions = { origin: true, credential: true };
//   } else {
//     corsOptions = { origin: false };
//   }
//   callback(null, corsOptions);
// }
// app.get("/", cors(corsCheck), (req, res, next) => {
//   res.send("Hello Express");
//   next();
// });
app.use(logger("dev"));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
// app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(passport.initialize());
// Middlewares moved morgan into if for clear tests
if (!process.env.NODE_ENV === "test") {
  app.use(morgan("dev"));
}

app.use(express.json());

// Routes
const apiRouter = require("./routes/index");
app.use("/api/v1/", apiRouter);

// app.use((req, res, next) => {
//   next(createError(404));
// });

// app.use((err, req, res) => {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   res.status(err.status || 500);
//   res.render("error");
// });
const errorhandler = require("errorhandler");
app.use(errorhandler({ log: errorNotification }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
function errorNotification(err, str, req) {
  console.log("ERROR", err);
}

module.exports = app;
