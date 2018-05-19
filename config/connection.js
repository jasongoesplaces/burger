var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 8889,    
        user: "root",
        password: "root",
        database: "burgersDB"
    })
}


connection.connect((err) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;