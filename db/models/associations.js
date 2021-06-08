const User = require('./user');
const Cart = require('./carts/carts');
const Cart_product = require('./cart_product/cart_product');
const Product = require('./product/product');
const Order_product = require('./order_product/order_product');
const Order = require('./order/order');


module.exports = function () {
User.hasOne(Cart,{
    foreignKey: 'userId', 
    });

Cart.belongsTo(User,{
    foreignKey: 'userId'
});

Cart.hasMany(Cart_product,{
    foreignKey: "cartId",
});

Cart_product.belongsTo(Cart,{
    foreignKey: "cartId",
});

Cart_product.belongsTo(Product,{
    foreignKey: "productId",
});

Order.hasMany(Order_product,{
    foreignKey: "orderId",
});

Order_product.belongsTo(Order,{
    foreignKey: "orderId",
});

Order_product.belongsTo(Product,{
    foreignKey: "productId",
})

User.hasMany(Order,{
    foreignKey: "userId",
});

Order.belongsTo(User, {
    foreignKey: "userId",
});
};