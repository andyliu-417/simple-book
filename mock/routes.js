var express = require("express");
var router = express.Router();
var api = require('./api')

router.get("/users", api.getUsers);

module.exports = router;
