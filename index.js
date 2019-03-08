const db = require("./db.js");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res){

    db.query("SELECT * from app;", [], function(err, data){
        res.end(JSON.stringify(data.rows));
    });    

})

app.get("/:app_code", function(req, res){

})

app.post("/:app_code", function(req, res){

})

app.listen(process.env.PORT || 3000);
