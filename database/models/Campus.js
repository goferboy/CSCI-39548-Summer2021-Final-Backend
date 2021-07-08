const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },

  imageURL: {
    type: Sequelize.STRING,
    defaultValue: "https://cdn.onlinewebfonts.com/svg/img_379742.png",
    validate: {
      isURL: true
    }
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },

  description: {
    type: Sequelize.STRING,
  }

});

module.exports = Campus;
