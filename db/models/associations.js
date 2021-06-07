const User = require('./user');
const Cart = require('./cart');

User.hasOne(Cart,{
    foreignKey: 'userId', 
    });