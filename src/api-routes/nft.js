const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
    res.json("Data");
});

module.exports = router;
