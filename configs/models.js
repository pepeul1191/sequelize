const Sequelize = require('sequelize');
var database = require('./database');

var db = database.db;

const Department = db.define(
  'departments', 
  {
	  id: { 
      type: Sequelize.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
	  name: { 
      type: Sequelize.STRING, 
      allowNull: false,  
    },
});

exports.db = db;
exports.Department = Department;
