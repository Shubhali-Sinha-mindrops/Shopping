const fields = require('./fields');

const Cart = SequelizeConnect.define('cart', fields, {
    tableName: 'cart',
});

Object.assign(userSchema, requireDirectory(module));

module.exports = Cart;

return Cart;
