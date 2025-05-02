const { client } = require('../db/connection');
const { ObjectId } = require('mongodb');

// Function to get all contacts
const getAllContacts = async (req, res) => {
  // Query the contacts collection in contactsDB and convert results to an array
  const contacts = await client.db('contactsDB').collection('contacts').find().toArray();
  res.json({ contacts });
};

// Function to get contact by id
const getContactById = async (req, res) => {
  // get id from url
  const id = req.params.id;
  // checks if id is valid MongoDB ObjectId
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const contact = await client.db('contactsDB').collection('contacts').findOne({ _id: new ObjectId(id) });

  if (!contact) {
    return res.status(404).json({ error: 'Contact not found' });
  }
  res.json(contact);
};

module.exports = { getAllContacts, getContactById };