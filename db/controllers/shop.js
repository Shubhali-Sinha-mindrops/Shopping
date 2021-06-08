const User = require('../models/user');
const Order = require('../models/order/order');
const { productId } = require('../models/cart_product/fields');

const postOrder = (req,res, next) => {
    User.find({select: ['id']})
    .then(userId => {
        const userID = userId[userId.length - 1];
        const order = new Order();
        order.userid = userID;
        order.save();
console.log('Hello');
        setTimeout(() => {
            Order.find({relations: ['userid'], where: {userid: userID}, order: {id: 'DESC'}, take:1})
            .then(ord => {
                CartProduct.find({relations: ['cartid', 'productId'], where: {cartid: userID}})
                .then(cItem => {
                    cItem.forEach(oItem => {
                        const orderProduct = new OrderProduct();
                        orderProduct.orderId = ord[0];
                        orderProduct.productId = oItem.productId;
                        orderProduct.save();
                        CartProduct.delete({cartid: userID});
                    });
                    setTimeout(() => {
                        res.redirect('/orders');
                    }, 300);
                })
                .catch(console.log);
            })
            .catch(console.log);
        }, 700);
    })
    .catch(console.log);
};

module.exports = {
    postOrder,
};