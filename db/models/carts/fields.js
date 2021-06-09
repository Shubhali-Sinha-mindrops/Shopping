'use strict';

module.exports = {
    id:{
        type: Sequelize.Integer,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: Sequelize.Integer,
    total: Sequelize.Integer,
};