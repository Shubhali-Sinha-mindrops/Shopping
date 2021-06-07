'use strict';
const User = require('./user');
//const Cart_product = require('../models/cart_product/cart_product');

module.exports = function(sequelize, DataTypes) {
    const Cart = sequelize.define('Cart',{
        id:{
            type: DataTypes.Integer,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: DataTypes.Integer,
        total: DataTypes.Integer,
    })
Cart.belongsTo(User,{
    foreignKey: 'userId',
})

Cart.hasMany(Cart_product,{
    foreignKey: 'id',
})
return Cart;
}

