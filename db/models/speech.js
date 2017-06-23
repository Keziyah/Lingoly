'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Speech = db.define('speech', {
  content: {
    type: Sequelize.TEXT, 
    allowNull: false
  }
})

module.exports = Speech; 
