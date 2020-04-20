const express = require('express');
const sequelize = require('./config/database');

// eslint-disable-next-line no-unused-vars
const models = require('./models');

const app = express();
const port = 5000;

sequelize
  .sync()
  .then((result) => {
    console.log(result); // for testing for now
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });
