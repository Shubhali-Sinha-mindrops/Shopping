const fields = require('./fields');

const Cart = SequelizeConnect.define('carts', fields, {
    tableName: 'carts',
});

module.exports = Cart;

