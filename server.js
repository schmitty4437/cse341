require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { connectDb} = require('./db/connection');
const nameRouter = require('./routes/index');
const contactsRouter = require('./routes/contacts');

//allow cross origin requests
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use('/', nameRouter);
app.use('/contacts', contactsRouter);

// server starts when db is connected
connectDb().then(() => {
  app.listen(port, () => {
      console.log(`Web Server is running on port ${port}`);
  });
});