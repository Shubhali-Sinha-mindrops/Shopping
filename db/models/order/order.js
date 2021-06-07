const fields = require('./fields');

const data = SequelizeConnect.define('orders', fields, {
    tableName: 'orders',
});

Object.assign(userSchema, requireDirectory(module));

module.exports = data;
