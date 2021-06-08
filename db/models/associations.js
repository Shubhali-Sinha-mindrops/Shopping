const User = require('./user');
const Cart = require('./cart');
const Cart_product = require('./cart_product/cart_product');
const Product = require('./product/product');
const Order_product = require('./order_product/order_product');
const Order = require('./order/order');

User.hasOne(Cart,{
    foreignKey: 'userId', 
    });

Cart.belongsTo(User,{
    foreignKey: 'userId'
});

Cart_product.belongsToMany(Cart,{
    through: "Cart_User",
    as: "carts",
    foreignKey: "cartId",
});

Cart.belongsToMany(Cart_product,{
    through: "Cart_User",
    as: "cart_products",
    foreignKey: "cart_productsId",
});

Cart_product.belongsToMany(Product,{
    as: "products",
    foreignKey: "id",
});

Order_product.belongsToMany(Order,{
    through: "Order_User",
    as: "orders",
    foreignKey: "orderId",
});

Order.belongsToMany(Order_product,{
    through: "Order_User",
    as: "order_products",
    foreignKey: "id",
});

User.belongsToMany(Order,{
    as: "orders",
    foreignKey: "id",
});

Order.belongsTo(User, {
    as: "users",
    foreignKey: "userId",
});