// local test db
const Sequelize = require('sequelize');

const sequelize = new Sequelize('open-eshop', 'root', 'open123', {
  host: 'localhost',
  port: '32788', // change port to 3306 in future
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
