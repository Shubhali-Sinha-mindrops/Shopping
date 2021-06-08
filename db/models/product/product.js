const fields = require('./fields');

const Product = SequelizeConnect.define('products', fields, {
    tableName: 'products',
});

module.exports = Product;
