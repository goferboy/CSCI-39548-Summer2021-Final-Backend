const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    notEmpty: true,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    notEmpty: true,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    validate:{
      isEmail: true, 
    }
  },

  imageURL: {
    type: Sequelize.STRING,
    defaultValue: "https://cdn.onlinewebfonts.com/svg/img_210318.png",
    validate: {
      isURL: true
    }
  },
  
  gpa: {
    type: Sequelize.DECIMAL,
    allowNull: true,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }

});

module.exports = Student;
