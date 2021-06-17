const model = require('../models');
const Cart = model.cart;
const Product = model.product;
const Orders = model.order;
const Order_Product = model.order_product;
const Cart_Product = model.cart_product;

const orderProducts = async(req,res) => {
    try{
        const prodID = req.params.productID;
        const product = await Product.findOne({
            where: {
                id: prodID
            }
        })

        if(!product){ throw new Error("Product doesn't exist..."); }

        const cartProduct = await Cart_Product.findOne({
            where: {
                productId: prodID
                }
            })

            if(!cartProduct)
            {
                throw new Error("Product is not present in the cart");
            }

            
        const cart = await Cart.findOne({
            where: {
                id: cartProduct.cartId
                }
            })  

            if(!cart)
            {
                throw new Error("User doesn't have cart");
            }

        const orderProduct = await Order_Product.findOne({
            where: {
                productId: cartProduct.productId
                }
            })
    
            if(!orderProduct)
            {
                const data = {
                    orderId: null,
                    productId: cartProduct.productId
                    }

        const values = await Order_Product.create(data);
        
        const ord = await Orders.findOne({
            where: {
                userId: cart.userId
                }
            })

            if(!ord){
                const ords = {
                    userId: cart.userId,
                    orderTotal: cartProduct.quantity * product.price
                    }

            const value = await Orders.create(ords);
            values.update({ orderId: value.id });

            cart.update({total: +total - product.price * cartProduct.quantity});
            Cart_Product.delete({where: {productID: prodID}});

            return res.status(201).send("Order placed for the product");
            }

            else{
                ords.update({
                    orderTotal: +ords.orderTotal + cartProduct.quantity * product.price
                    })
            cart.update({total: +total - product.price * cartProduct.quantity});
            
            cartProduct.delete({where: {productID: prodID, cartId: cart.id}});

            return res.status(201).send("Order updated");
            }
            }

            else{
                const ordss = await Orders.findOne({
                    where: {
                        userId: cart.userId
                        }
                    })
                        
            if(!ordss){
                const ords = {
                    userId: cart.userId,
                    orderTotal: cartProduct.quantity * product.price
                    }
            const value = await Orders.create(ords);
            values.update({ where: { orderId: value.id }});

            cart.update({total: +total - product.price * cartProduct.quantity});
            cartProduct.delete({where: {productID: prodID}});

            return res.status(201).send("Order placed for the product");
            }

            else{
                ordss.update({
                    orderTotal: +ordss.orderTotal + cartProduct.quantity * product.price
                    })

            cart.update({total: +total - product.price * cartProduct.quantity});
            cartProduct.delete({where: {productID: prodID}});

            return res.status(201).send("Order updated");
        }
    }}
    catch(error)
    {
        res.status(500).send(error);
    }
};


module.exports = {
    orderProducts,
}