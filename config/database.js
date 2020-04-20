// local test db
const Sequelize = require('sequelize');

const sequelize = new Sequelize('open-eshop', 'root', '', {
  host: 'localhost',
  port: '32780', // change port to 3306 in future
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
