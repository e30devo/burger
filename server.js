var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

var app = express();
var PORT = 8080;

app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
})
