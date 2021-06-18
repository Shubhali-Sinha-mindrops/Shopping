const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
var bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');

const Op = db.Sequelize.Op;

exports.signUp = async(req, res) => {
  try {
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    const user = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      password: bcrypt.hashSync(req.body.password,8)
    };
  
    await User.create(user)
      .then(data => {
        res.send(data);
      })
      
    if(req.body.roles) {
      const roles = await Role.findAll({
        where: {
          name: {
            [Op.or]: req.body.roles
          }
        }
      })

      if(roles)
      {
        user.setRoles(roles);
          res.send({message: "User was registered successfully!"});
      }
    }
    else{
      user.setRoles([1]).then(() => {
        res.send({ message: "User was registered successfully!" });
      });
    }
    
  }catch (error) {
    res.status(500).send({
      message: "Something went wrong.." || err.message
    });
  }
  };
  
exports.signIn = async(req,res) => {
  try {
    const user = await User.findOne({
      where: {
        name: req.body.name
      }
    })

    if(!user) {
      return res.status(404).send({message: "User not found!"});
    }

    var passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if(!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "InvalidPassword!"
      });
    }

    var token = jwt.sign({ id: user.id},config.secret,{
      expiresIn: 86400 //24 hrs
    });

    var authorities = [];
    user.getRoles().then(roles => {
      for(let i=0; i<roles.length; i++) {
        authorities.push("ROLE_" + roles[i].name.toUpperCase());
      }
      res.status(200).send({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        roles: authorities,
        accessToken: token
      });
    });
    
  } catch (error) {
    res.status(500).send({message: err.message});
  };
};


  exports.findUser = (req,res) => {
      const id = req.params.id;

      User.findByPk(id)
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message: "Error retrieving User with id ="+id
          });
      });
  };
