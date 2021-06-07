const fields = require('./fields');

const data = SequelizeConnect.define('order_products', fields, {
    tableName: 'order_products',
});

Object.assign(userSchema, requireDirectory(module));

module.exports = data;
