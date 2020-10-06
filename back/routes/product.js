const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({
    extended: false
});

router.get('/', productController.getProducts);
router.get('/:productId', urlencodedParser, productController.getProductById);
router.get('/', urlencodedParser, productController.getProducts);
router.post('/add', urlencodedParser, productController.addProduct);
router.put('/edit', urlencodedParser, productController.editProduct);
router.delete('/:productId', productController.deleteProduct);

module.exports = router;