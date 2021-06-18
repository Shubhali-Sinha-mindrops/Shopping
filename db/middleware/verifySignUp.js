const model = require('../models');
const ROLES = model.ROLES;
const User = model.user;

checkDuplicateUsernameOrEmail = async(req,res,next) => {
    const uname = await User.findOne({
        where: {
            name: req.body.name
        }
    })

    if(uname) {
        await res.status(400).send({
            message: "Failed! This username is already in use!"
    });
    return;
    }

    const uemail = await User.findOne({
        where: {
            email: req.body.email
        }
    })

    if(uemail) {
        await res.status(400).send({
            message: "Failed! This email is already in use!"
    });
    return;
    }

    next();
};


checkRolesExisted = async(req,res,next) => {
    if(req.body.roles){
        for(let i=0; i<req.body.roles.length;i++) {
            if(!ROLES.includes(req.body.roles[i])){
                res.status(400).send({
                    message: "Failed! Role doesn't exist =" + req.body.roles[i]
            });
            return;
            }
        }
    }
    next();
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
    checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;












