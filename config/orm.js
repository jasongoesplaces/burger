var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
    all: function(table, cb) {
        connection.query("SELECT * FROM " + table + ";", function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    
    update: function(table, condition, cb) {
        connection.query("UPDATE " + table + " SET devoured=true WHERE id=" + condition + ";", function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    create: function(table, val, cb) {
        connection.query('INSERT INTO ' +table+ ' (burger_name) VALUES ("' +val+ '");', function(err,result){
            if(err) throw err;
            cb(result);
        })
    }

};

// Export the orm object for the model (cat.js).
module.exports = orm;