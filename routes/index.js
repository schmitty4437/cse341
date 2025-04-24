const express = require('express');
const router = express.Router();
const nameController = require('../controllers');

router.get('/', nameController.getName);

module.exports = router;