const fields = require('./fields');

const Cart_product = SequelizeConnect.define('cart_products', fields, {
    tableName: 'cart_products',
});

module.exports = Cart_product;

