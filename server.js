const express = require('express');
const sequelize = require('./config/database');

// eslint-disable-next-line no-unused-vars
const productModel = require('./models/product'); // sequelize is not picking up schemas need to check on later

const app = express();
const port = 5000;

sequelize
  .sync()
  .then((result) => {
    console.log(result); // for testing for now
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => {
    console.log(err); // for testing for now
  });
