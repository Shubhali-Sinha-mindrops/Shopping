'use strict';

module.exports = function(sequelize, Sequelize) {
    const Cart_product= sequelize.define('cart_products',{
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
    })
    module.exports = Cart_product;
    return Cart_product;
}
 