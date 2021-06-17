const model = require('../models');
const User = model.user;
const Cart = model.cart;
const Cart_Product = model.cart_product;
const Order_Product = model.order_product;
const Product = model.product;


// get the list of all the users who have cart or not having cart.
const list = (req, res) => {
    return User
        .findAll({
            include: [{
                model: Cart,
            }],
        })
        .then((users) => res.status(200).send(users))
        .catch((error) => { res.status(400).send(error); });
};


//merge data of all the users who have cart.
const getUserCart = async (req, res) => {
    const results = await Cart.findAll({ include: User });
    res.status(200).send(results, null, 2);
};


//getting the data of user table by checking that id of user model and userId of carts model.  
const getById = async (req, res) => {
    try {
        const ids = req.params.id;
        User.findByPk({
            attributes: ['id'],
            id: ids,
        })

        Cart.findByPk({
            attributes: ['userId'],
            userId: ids,
        });

        const Ids = await User.findByPk(ids);
        console.log(Ids);
        const userIds = await Cart.findByPk(ids);
        console.log(userIds);

        if (Ids.id == userIds.userId) {
            res.status(200).send(Ids);
        }
    }
    catch (error) {
        console.log(error);
    }
};


//Module to add user.
const add = (req, res) => {
    return User
        .create(req.body)
        .then((users) => res.status(201).send(users))
        .catch((error) => res.status(400).send(error));
};


//Add products in cart_product.
const addProducts = (req, res) => {
    if (!req.body.cartId) {
        res.status(400).send({
            message: "Content cannot be empty"
        });
        return;
    }

    const cart_products = {
        cartId: req.body.cartId,
        productId: req.body.productId,
        quantity: req.body.quantity
    };

    Cart_Product.create(cart_products)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating products."
            });
        });
};


//Fetch all the products in cart with details.
const getCartProduct = async (req, res) => {
    const results = await Cart_Product.findAll({ include: Cart });
    res.status(200).send(results, null, 2);
}


//Add new products to cart or increase the quantity.
const addCartProduct = async (req, res) => {
    try {

        const prodID = req.params.productId;
        const cid = req.params.cartId;
        
        const cart = await Cart.findByPk(cid);
        
        if (!cart) {
            throw new Error("user do not have Cart")
        }
        else{
        const product = await Product.findOne({
            where: {
                id: prodID
            }
        });
        
        if (!product) {
            throw new Error("Product doesnot exist");
        }
        else{
        const cartProduct = await Cart_Product.findOne({
            where: {
                productId: prodID,
            }
        })
        
        if (!cartProduct) {
            const data = {
                cartId: cid,
                productId: prodID,
                quantity: 1,
            }
            await Cart_Product.create(data)
        } else {
            await cartProduct.update({
                quantity: +cartProduct.quantity + 1
            });
        }

        cart.update({
            total: +cart.total + product.price * cartProduct.quantity
        });

        return res.status(200).send("product successfully added to cart")

    } }}
    catch (error) {
        return res.status(500).send(error)
    }
};
  

//Delete product from cart.
const deleteCartProduct = async(req,res) => {
    try{
    const prodId = req.params.id;
    
    const product = await Product.findOne(
        {
            where:
            {
                id: prodId
            }
        }
    )

    if(!product)
    {
        throw new Error("Product not found");
    }
    else{
    const cartProduct = await Cart_Product.findOne(
        {
            where:
            {
                productId: prodId       
            }
        }
    )

    if(!cartProduct)
    {
        throw new Error("Product is not present in the cart");
    }
    else
    {
        const cart = await Cart.findOne(
            {
                where:
                {
                    id: cartProduct.cartId
                }
            }
        )

        if(+cartProduct.quantity > 1)
        {
            cartProduct.update({
                quantity: +cartProduct.quantity - 1
            })

            cart.update({
                total: +cart.total - product.price
            })
            return res.status(201).send("Qunatity decreased");
        }

        else{
            cartProduct.delete({
                where:
                {
                    productId: prodID
                }
            })
            return res.status(200).send("Product no longer available in the cart");
        }
    }
}    
}
catch (error) {
    return res.status(500).send(error)
}
};

//Add product in cart directly.
const addCart = (req, res) => {
    if (!req.body.userId) {
        res.status(400).send({
            message: "Content cannot be empty"
        });
        return;
    }

    const carts = {
        userId: req.body.userId,
        total: req.body.total
    };

    Cart.create(carts)
        .then(data => {
            res.status(200).send(carts);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retreiving data."
            });
        });
};


//order product directly.
const placeOrder = (req, res) => {
    if (!req.body.orderId) {
        res.status(400).send({
            message: "Content cannot be empty"
        });
        return;
    }

    const order_products = {
        orderId: req.body.orderId,
        productId: req.body.productId,
    };

    Order_Product.create(order_products)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating products."
            });
        });
};

module.exports = {
    list,
    getUserCart,
    getById,
    add,
    addProducts,
    addCart,
    getCartProduct,
    placeOrder,
    addCartProduct,
    deleteCartProduct,
};









