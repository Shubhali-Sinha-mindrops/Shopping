'use strict';

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
        password: Sequelize.STRING
    },{
        timestamps:true,
    })
    
module.exports = User;
return User;
}
