const sequelize = require('../config/database');

const models = {
  Product: sequelize.import('./Product'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

module.exports = models;
