var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var visitorsRouter = require('./routes/visitors');
var queueRouter = require('./routes/queue.number');

const mongoose = require("mongoose");
var app = express();
var corsOptions = {
  origin: "http://localhost:4200"
};
app.use(cors(corsOptions));

mongoose
.connect("mongodb://localhost:27017/visitorqueue", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to the database!");
})
.catch(err => {
  console.log("Cannot connect to the database!", err);
  process.exit();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome to Hotel Queue Management System Check' );
});

app.listen(port, () => {
  console.log(`Hotel Queue Management running at http://${hostname}:${port}/`);
});

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/visitors', visitorsRouter);
app.use('/api/queue', queueRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;