var orm = require("../config/orm.js");

var burger = {
    all: (cb) => {
        orm.all("burgers",(res) => {
            cb(res);
        });
    },

    update: (id, cb) => {
        orm.update("burgers", id, cb);
    },

    create: (name, cb) => {
        orm.create("burgers", name, cb);
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
