'use strict';

require('../models/associations');
module.exports = function(sequelize, Sequelize) {
    const User= sequelize.define('users',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: Sequelize.TEXT,
        email: Sequelize.STRING,
        phone: Sequelize.INTEGER,
        address: Sequelize.STRING,
    },{
        timestamps:true,
    });

    return User;
};
 