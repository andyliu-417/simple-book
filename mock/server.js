const express = require("express");
const app = express();
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
app.use(cookieParser());
app.use(bodyParser.json());

var router = require("./routes");
app.use("/api", router);

var http = require("http");
var server = http.Server(app);

server.listen(5000);
server.on("listening", () => {
  var addr = server.address();
  var bind =
    typeof addr === "string" ? "pipe " + addr : addr.address + ":" + addr.port;
  console.log("Listening on " + bind);
});
