const fields = require('./fields');

const Product = SequelizeConnect.define('products', fields, {
    tableName: 'products',
});

Object.assign(userSchema, requireDirectory(module));

module.exports = Product;
