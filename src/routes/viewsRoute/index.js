const C_VIEWS = require("../../controllers").ViewsController;
const express = require("express");
const router = express.Router();

// Sub Ejs Routes
router.get("/", C_VIEWS.home);
module.exports = router;
