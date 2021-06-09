const User = require('../models/user');
const Carts = require('../models/carts');


 module.exports = {
    list(req,res) {
        return User
        .findAll({
            include: [{
                model: Carts, 
            }],
    
        })
        .then((users) => res.status(200).send(users))
        .catch((error) => { res.status(400).send(error);});
    },


    getById(req,res) {
        return User
        .findById(req.params.id,{
            include: [{
                model: Carts,
            }],
        })
        .then((users) => {
            if(!users) {
                return res.status(404).send({
                    message: 'User Not Found',
                });
            }
            return res.status(200).send(users);
        })
        .catch((error) => res.status(400).send(error));
    },
    add(req,res) {
        return User
        .create({
            class_name: req.body.class_name,
        })
        .then((users) => res.status(201).send(users))
        .catch((error) => res.status(400).send(error));
    },
};









