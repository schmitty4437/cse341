const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

// get contacts based on ALL or by id
router.get('/', contactsController.getAllContacts);
router.get('/:id', contactsController.getContactById);

module.exports = router;