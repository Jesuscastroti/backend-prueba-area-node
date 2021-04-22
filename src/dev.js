const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const https = require("https");
const fs = require("fs");
// var http = require("http");
// var nStatic = require("node-static");

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", function (req, res) {
  res.send("Api prueba area running");
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
