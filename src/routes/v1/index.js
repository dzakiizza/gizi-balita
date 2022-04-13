const express = require("express");
const router = express.Router();
const giziBalita = require("./giziBalita.route");

router.use("/giziBalita", giziBalita);

module.exports = router;
