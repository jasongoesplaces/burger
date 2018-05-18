var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
    all: (table, cb) => {
        connection.query("SELECT * FROM " + table + ";", (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    
    update: (table, condition, cb) => {
        connection.query("UPDATE " + table + " SET devoured=true WHERE id=" + condition + ";", (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    create: (table, val, cb) => {
        connection.query('INSERT INTO ' +table+ ' (burger_name) VALUES ("' +val+ '");', (err,result) => {
            if(err) throw err;
            cb(result);
        })
    }

};

// Export the orm object for the model (cat.js).
module.exports = orm;