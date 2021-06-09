const router = require("express").Router();
const users = require("../controllers/user");
const carts = require('../controllers/carts');

router.post("/insert",users.create);
router.get("/find/:id", users.findOne);


router.post("/insertcart",carts.create);
router.get("/findcart/:id", carts.findOne);

module.exports = router;

