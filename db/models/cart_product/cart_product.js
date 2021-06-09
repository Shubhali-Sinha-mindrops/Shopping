'use strict';

require('../associations');
module.exports = function(sequelize, Sequelize) {
    const Cart_products= sequelize.define('cart_products',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cartId: Sequelize.INTEGER,
        productId: Sequelize.INTEGER,
        quantity: Sequelize.INTEGER,
    },{
        timestamps:true,
    });

    return Cart_products;
};
 