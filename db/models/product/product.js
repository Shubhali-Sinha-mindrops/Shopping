'use strict';

require('../associations');
module.exports = function(sequelize, Sequelize) {
    const Product= sequelize.define('products',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: Sequelize.TEXT,
        description: Sequelize.TEXT,
        price: Sequelize.INTEGER,
    },{
        timestamps:true,
    });

    return Product;
};
 