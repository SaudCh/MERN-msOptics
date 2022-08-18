const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const orderController = require('../controllers/orderController');

const router = express.Router();

router.use(viewsController.cart);
router.use(viewsController.pages);
router.use(authController.isLoggedIn);

// router.get('/login', viewsController.getLoginForm);

router.get(
  '/admin',
  authController.protect,
  authController.restrictTo('admin'),
  viewsController.getAdminPanel
);

router.get(
  '/admin-users-setting',
  // authController.protect,
  // authController.restrictTo('admin'),
  viewsController.userSetPanel
);
router.get(
  '/admin-announcments-setting',
  // authController.protect,
  // authController.restrictTo('admin'),
  viewsController.announceSetPanel
);
router.get(
  '/admin-banners-setting',
  // authController.protect,
  // authController.restrictTo('admin'),
  viewsController.bannerSetPanel
);
router.get(
  '/admin-categories-setting',
  // authController.protect,
  // authController.restrictTo('admin'),
  viewsController.catSetPanel
);
router.get(
  '/admin-collections-setting',
  // authController.protect,
  // authController.restrictTo('admin'),
  viewsController.colSetPanel
);
router.get(
  '/admin-lenses-setting',
  // authController.protect,
  // authController.restrictTo('admin'),
  viewsController.lensSetPanel
);
router.get(
  '/admin-orders-setting',
  // authController.protect,
  // authController.restrictTo('admin'),
  viewsController.orderSetPanel
);
router.get(
  '/admin-pages-setting',
  // authController.protect,
  // authController.restrictTo('admin'),
  viewsController.pageSetPanel
);
router.get(
  '/admin-products-setting',
  // authController.protect,
  // authController.restrictTo('admin'),
  viewsController.prodSetPanel
);

module.exports = router;
