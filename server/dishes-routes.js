const express = require("express");
const router = express.Router();
const getDishesData = require("./dishes-data");

router.get("/dishes", function (req, res) {
    res.send(getDishesData());
});

module.exports = router;