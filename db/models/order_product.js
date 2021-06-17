'use strict';

module.exports = function(sequelize, Sequelize) {
    const Order_product= sequelize.define('order_products',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        orderId: Sequelize.INTEGER,
        productId: Sequelize.INTEGER,
    },{
        timestamps:true,
    });
    module.exports = Order_product;
    return Order_product;
};
 