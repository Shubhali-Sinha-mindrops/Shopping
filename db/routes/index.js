module.exports = app => {
    const users = require("../controllers/user");

    var router = require("express").Router();

    router.post("/insert",users.create);

    router.get("/:id",users.findOne);

    app.use('/api/user',router);
};