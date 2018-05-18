var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/",(req, res) => {
    burger.all((data) => {
        console.log(data)
        res.render("index", {data});
    });
});

router.put("/burgers/update", (req, res) => {
    burger.update(req.body.burger_id,(result) => {
        console.log(result);
        res.redirect("/");
    });
});

router.post('/burgers/create', (req,res) => {
    burger.create(req.body.burger_name,(result) => {
        res.redirect("/")
    })
})


// Export routes for server.js to use.
module.exports = router;