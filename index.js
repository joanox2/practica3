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

    var id = req.params.app_code;
    db.query("SELECT count(*) from app WHERE app_code = $1", [id], function(err, data){
        if( data.rows[0].count == 0){
            res.sendStatus(404);
            res.end([
                "Error 404."
            ].join('\n'));
        }

        else{
            db.query("SELECT * from record where app_code = $1;", [id], function(err, data){
                res.end(JSON.stringify(data.rows));
            });
        }
    });
})

app.post("/:app_code", function(req, res){

    if(req.body.name == "" || req.body.score == ""){
        res.status(422);
        res.end(["Error 422. It has not been indicated the name of the player or the scores"].join('\n'))
    }
    else{
        var id = req.params.app_code;
        db.query("INSERT INTO record (app_code, player, score) VALUES ($1, $2, $3);", [id, req.body.name, req.body.score], function(err, data){
            if(err){
                res.status(500);
                res.end(["Error 500"].join('\n'));
            }
        });
    }
})

app.listen(process.env.PORT || 3000);
