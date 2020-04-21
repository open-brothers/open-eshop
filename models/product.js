const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('product', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  title: Sequelize.STRING,
});

module.exports = () => Product;
