const User = require('../models/user');
const Cart = require('../models/carts/carts');
//const Order = require('../models/order/order');
//const { productId } = require('../models/cart_product/fields');

module.exorts = {
    list(req,res) {
        return User
        .findAll({
            include: [{
                model: Cart,
                as: 'cart' 
            }],
        })
        .then((users) => res.status(200).send(users))
        .catch((error) => { res.status(400).send(error);});
    },

    getById(req,res) {
        return User
        .findById(req.params.id,{
            include: [{
                model: Cart,
                as: 'cart'
            }],
        })
        .then((user) => {
            if(!user) {
                return res.status(404).send({
                    message: 'User Not Found',
                });
            }
            return res.status(200).send(user);
        })
        .catch((error) => res.status(400).send(error));
    },
    add(req,res) {
        return User
        .create({
            class_name: req.body.class_name,
        })
        .then((user) => res.status(201).send(user))
        .catch((error) => res.status(400).send(error));
    },
};










/*
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
};*/