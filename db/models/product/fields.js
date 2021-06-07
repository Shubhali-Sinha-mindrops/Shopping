'use strict';

module.exports = {
    id:{
        type: DataTypes.Integer,
        primaryKey: true,
        autoIncrement: true,
    },
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    price: DataTypes.Integer,
}




