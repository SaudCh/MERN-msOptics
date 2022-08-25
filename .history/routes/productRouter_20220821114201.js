const router = require('express').Router();
const authController = require('../controllers/authController');
const productController = require('../controllers/productConstroller');
const viewsController = require('../controllers/viewsController');

router.get('/t/sunglasses', viewsController.getSunGlasees);
router.get('/t/prescription', viewsController.getFrames);


router
  .route('/')
  .get(productController.getAllProducts)
  .post(
    // authController.protect,
    // authController.restrictTo('admin'),
    productController.uploadProductImages,
    productController.resizeProductImages,
    productController.createProduct
  );

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(
    // authController.protect,
    // authController.restrictTo('admin'),
    productController.uploadProductImages,
    productController.resizeProductImages,
    productController.updateProduct
  )
  .delete(
    // authController.protect,
    // authController.restrictTo('admin'),
    productController.deleteProduct
  );

module.exports = router;
