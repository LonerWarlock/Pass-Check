const express = require("express");
const router = express.Router();
const analyzePassword = require("../controllers/analyzeController");

// POST /api/password/analyze
router.post("/analyze", analyzePassword);

module.exports = router;
