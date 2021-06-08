'use strict';

module.exports = {
    id:{
        type: Sequelize.Integer,
        primaryKey: true,
        autoIncrement: true,
    },
    cartId: Sequelize.Integer,
    productId: Sequelize.Integer,
    quantity: Sequelize.Integer,
}


