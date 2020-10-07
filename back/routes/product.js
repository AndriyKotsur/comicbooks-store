const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const upload = require('../middleware/upload');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({
    extended: false
});

router.get('/', productController.getProducts);
router.get('/:productId', urlencodedParser, productController.getProductById);
router.get('/', urlencodedParser, productController.getProducts);
router.post('/add', upload.uploadImage, urlencodedParser, productController.addProduct);
router.put('/edit', urlencodedParser, productController.editProduct);
router.delete('/:productId', productController.deleteProduct);

module.exports = router;