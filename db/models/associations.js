module.exports = function (model) {

model.user.hasOne(model.cart,{
    foreignKey: 'userId', 
});

model.cart.belongsTo(model.user,{
    foreignKey: 'userId'
});

model.cart.hasMany(model.cart_product,{
    foreignKey: "cartId",
});

model.cart_product.belongsTo(model.cart,{
    foreignKey: "cartId",
});

model.cart_product.belongsTo(model.product,{
    foreignKey: "productId",
});

model.order.hasMany(model.order_product,{
    foreignKey: "orderId",
});

model.order_product.belongsTo(model.order,{
    foreignKey: "orderId",
});

model.order_product.belongsTo(model.product,{
    foreignKey: "productId",
})

model.user.hasMany(model.order,{
    foreignKey: "userId",
});

model.order.belongsTo(model.user, {
    foreignKey: "userId",
});
};