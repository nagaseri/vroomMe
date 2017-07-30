const express = require("express");
const burger = require("../models/burger.js");

var router = express.Router();

router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", (req, res) => {
  burger.create(["burger_name"], [req.body.name], () => {
    res.redirect("/");
  });
});

router.put("/:id", (req, res) => {
  var condition = "id = " + req.params.id;
  console.log(`condition is "${condition}"`);
  burger.update({devoured: true}, condition, () => {
    res.redirect("/");
  });
});

router.delete("/", (req, res) => {

  burger.delete("id", req.body.id, () => {
    res.redirect("/")
  })

})

module.exports = router;