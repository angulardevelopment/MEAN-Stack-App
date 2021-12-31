const express = require("express"),
  path = require("path"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

config = require("./DB");

//  API file for interacting with MongoDB
const businessRoute = require("./routes/business.route");

mongoose.Promise = global.Promise;
// mongodb-connection-string - first param -> [config.DB] use that if you want to use local DB
const mongodbConnectionString =
  "mongodb+srv://test:test123@cluster0.dietn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// remove the deprecation warning by adding the option useUnifiedTopology
mongoose
  .connect(mongodbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("Can not connect to the database" + err);
    }
  );
// var morgan = require('morgan');

const app = express();
app.use(bodyParser.json());

// post express node js input, send form data(Html input data) to apis
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
// app.use(morgan('dev'));

// // Angular DIST output folder
// app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use("/business", businessRoute);

const port = process.env.port || 4000; // You can specify any available port over here.

const server = app.listen(port, function () {
  console.log("Listening on  " + port);
});
