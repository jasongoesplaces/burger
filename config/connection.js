var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,    
    user: "root",
    password: "root",
    database: "burgersDB"
});


connection.connect((err) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;