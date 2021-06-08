'use strict';

module.exports = {
    id:{
        type: Sequelize.Integer,
        primaryKey: true,
        autoIncrement: true,
    },
    title: Sequelize.TEXT,
    description: Sequelize.TEXT,
    price: Sequelize.Integer,
}




