const router = require("express").Router();
const users = require("../controllers/user");

router.post("/insert",users.create);
router.post("/find/:id", users.findOne);

module.exports = router

