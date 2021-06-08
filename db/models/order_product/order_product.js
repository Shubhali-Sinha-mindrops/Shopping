const fields = require('./fields');

const data = SequelizeConnect.define('order_products', fields, {
    tableName: 'order_products',
});

module.exports = data;
