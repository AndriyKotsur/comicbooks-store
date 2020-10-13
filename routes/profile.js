const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile');
const upload = require('../middleware/upload');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({
    extended: false
});

router.get('/:userId', profileController.getProfileProducts);
router.get('/product/:productId', urlencodedParser, profileController.getProfileProductById);
router.post('/product/add', upload.uploadImage, urlencodedParser, profileController.addProfileProduct);
router.put('/product/edit/:productId', upload.uploadImage, urlencodedParser, profileController.editProfileProduct);
router.delete('/:productId', profileController.deleteProfileProduct);

module.exports = router;