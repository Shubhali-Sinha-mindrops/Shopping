const router = require("express").Router();
const users = require("../controllers/user");
const carts = require('../controllers/carts');
const products = require('../controllers/products');

//user-controller
router.post("/insertUser",users.createUser);
router.get("/findUser/:id", users.findUser);

//carts-controller
router.post("/insertcart",carts.createCart);
router.get("/findcart/:id", carts.findCart);

//producrs-controller
router.post("/insertproducts",products.createProduct);
router.get("/findproduct/:id", products.findProduct);

module.exports = router;

