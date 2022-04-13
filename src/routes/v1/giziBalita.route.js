const express = require("express");
const router = express.Router();

const C_GIZIBALITA = require("../../controllers").GiziBalitaController;

/**
 * Find All
 */
router.get("/", C_GIZIBALITA.findAllBBPBIMT);
/**
 * Create All
 */
router.post("/", C_GIZIBALITA.createGiziBalita);

module.exports = router;
