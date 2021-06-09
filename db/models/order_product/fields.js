'use strict';

module.exports = {
    id:{
        type: Sequelize.Integer,
        primaryKey: true,
        autoIncrement: true,
    },
    orderId: Sequelize.Integer,
    productId: Sequelize.Integer,
}





