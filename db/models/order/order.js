const fields = require('./fields');
require('../models/associations');

const data = SequelizeConnect.define('orders', fields, {
    tableName: 'orders',
});

module.exports = data;
