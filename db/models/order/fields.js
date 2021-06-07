'use strict';

module.exports = {
    id:{
        type: DataTypes.Integer,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: DataTypes.Integer,
    orderTotal: DataTypes.Integer,
}




