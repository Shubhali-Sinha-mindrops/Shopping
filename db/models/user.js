'use strict';

module.exports = function(sequelize, Sequelize) {
    const User= sequelize.define('user',{
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
 