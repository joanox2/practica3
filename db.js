const { Pool, Client } = require('pg')
exports.query = function(query, params, callback) {
    const connectionString = "postgres://fuuiedngxdxrrm:6b65fa60b0d5d1f137389314767763c7d60b8db95584f1de1e8b13f6c6c5e969@ec2-54-221-201-212.compute-1.amazonaws.com:5432/d3udgj5n3c3ne3?ssl=true";
    const client = new Client({
        connectionString: connectionString,
    })
    client.connect((err) => {
        if (err) {
            console.error('connection error', err.stack);
            callback(err);
        }
    })
 
    client.query(query, params, (err, res) => {
        if (err) {
            console.log(err.stack)
            callback(err);
        } else {
            callback(err, res);
            client.end();
        }
    });
};