'use strict';

module.exports = {
    id:{
        type: DataTypes.Integer,
        primaryKey: true,
        autoIncrement: true,
    },
    cartId: DataTypes.Integer,
    productId: DataTypes.Integer,
    quantity: DataTypes.Integer,
}

