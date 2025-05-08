require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { connectDb } = require('./db/connection');
const nameRouter = require('./routes/index');
const contactsRouter = require('./routes/contacts');

// Allows requests from any origin
//allow all origins, allow post/get, allow content-type
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Acces-Controll-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Acces-Controll-Allow-Methods', 'Content-Type');
  next();
});

// This parse incoming json request bodies
// Basically takes JSON data and converts it to a format our program can use
app.use(express.json());

app.use('/', nameRouter);
// sends requests with /contacts to routes/contacts.js
app.use('/contacts', contactsRouter);

// server starts when db is connected
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Web Server is running on port ${port}`);
  });
});
