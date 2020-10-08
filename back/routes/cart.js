const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({
    extended: false
});

router.get('/:userId', cartController.getCartProducts);
router.post('/:productId', urlencodedParser, cartController.addCartProduct);
router.delete('/:productId', cartController.deleteCartProduct);

module.exports = router;