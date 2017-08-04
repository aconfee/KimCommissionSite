var express = require('express');
var router = express.Router();

var apiController = require('../controllers/apiController.js');

router.put("/availability/:status", apiController.updateStatus);
router.post("/contact", apiController.sendMessage);

module.exports = router;
