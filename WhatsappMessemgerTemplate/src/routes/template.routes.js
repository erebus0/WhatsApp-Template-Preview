const express = require('express');
const router = express.Router();
const templateController = require('../controllers/template.controller');

router.post('/preview', templateController.previewTemplate);

module.exports = router;