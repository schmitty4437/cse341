const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const nameRouter = require('./routes/index');

app.use('/', nameRouter);

app.listen(port, () => {
    console.log(`Web Server is running on port ${port}`);
});