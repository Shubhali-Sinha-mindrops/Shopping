const db = require("../models");
const Products = db.product;


const createProduct = (req,res) => {
    if(!req.body.title){
    res.status(400).send({
        message: "Content cannot be empty"
    });
    return;
    }

    const products = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    };

    Products.create(products)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while creating products."
        });
    });
};

const findProduct = (req,res) => {
    const id = req.params.id;

    Products.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message: err.message || "Error retrieving products with id ="+id
        });
    });
};


module.exports = {
    createProduct,
    findProduct,
};

