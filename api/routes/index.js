var express = require('express');
var router = express.Router();

var messenger = require('../controllers/messenger.controller.js');
var admin = require('../controllers/admin.controller.js');

router.post("/contact/inquiry", messenger.sendInquiry);
router.post("/contact/message", messenger.sendMessage);

router.put("/availability/:status", admin.updateStatus);

module.exports = router;
