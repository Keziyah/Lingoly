'use strict';

const Product = require('./product')
const Review = require('./review');
const Speech = require('./speech');


Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {Product, Review, Speech};
