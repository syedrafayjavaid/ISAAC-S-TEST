const express = require("express");
const router = express();
const { solution } = require("../modules/test.controller");
router.route("/").get(solution);

module.exports = router;