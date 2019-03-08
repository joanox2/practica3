const db = require("./db.js");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res){


})

app.get("/:app_code", function(req, res){

})

app.post("/:app_code", function(req, res){

})

http.createServer(app).listen(process.env.PORT || 3000);
