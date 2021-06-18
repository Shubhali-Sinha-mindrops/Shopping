'use strict';

module.exports = function(sequelize, Sequelize) {
    const Role= sequelize.define('roles',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: Sequelize.STRING,
    },{
        timestamps:true,
    })

module.exports = Role;
return Role;
}

