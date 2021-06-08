const fields = require('./fields');

const Cart_product = SequelizeConnect.define('cart_products', fields, {
    tableName: 'cart_products',
});

Object.assign(userSchema, requireDirectory(module));

module.exports = Cart_product;

return Cart_product;
