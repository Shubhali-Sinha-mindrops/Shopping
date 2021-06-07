const fields = require('./fields');
const Cart = require('../cart');

const Cart_product = SequelizeConnect.define('cart_products', fields, {
    tableName: 'cart_products',
});

Object.assign(userSchema, requireDirectory(module));

module.exports = cart_product;

Cart_product.belongsTo(Cart,{
    foreignKey: 'cartId',
})

return Cart_product;

