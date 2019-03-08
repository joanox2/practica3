const { Pool, Client } = require('pg')
exports.query = function(query, params, callback) {
    const connectionString = "postgres://haouabtqjeiwlh:455e505b7565e51994ec59771f107191e0aed142662e32ac36e49e1255f8aa3f@ec2-54-83-44-4.compute-1.amazonaws.com:5432/d3i1sem9vmjnbu?ssl=true";
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