'use strict';

module.exports = {
    id:{
        type: Sequelize.Integer,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: Sequelize.Integer,
    orderTotal: Sequelize.Integer,
}




