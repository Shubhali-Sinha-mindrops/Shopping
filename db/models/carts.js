'use strict';

module.exports = function(sequelize, Sequelize) {
    const Cart= sequelize.define('carts',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: Sequelize.INTEGER,
        total: Sequelize.INTEGER,
    },{
        timestamps:true,
    })

module.exports = Cart;
return Cart;
}

