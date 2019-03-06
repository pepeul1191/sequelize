const Sequelize = require('sequelize');

const sequelize = new Sequelize('locations', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  // storage: 'db/db_accesos.db',
  define: {
    timestamps: false // true by default
  }
});

exports.db = sequelize;
