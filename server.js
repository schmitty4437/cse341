require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { connectDb } = require('./db/connection');

app
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

// This parse incoming json request bodies
// Basically takes JSON data and converts it to a format our program can use
app.use(express.json());

// server starts when db is connected
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Web Server is running on port ${port}`);
  });
});
