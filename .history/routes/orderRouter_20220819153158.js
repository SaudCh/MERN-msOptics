const express = require('express');
const orderController = require('./../controllers/orderController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.use(authController.protect);

// router.get('/checkout-session', orderController.getCheckoutSession);
router.post("/checkout-session", orderController.checkoutSession);

// router.get('/createorder', orderController.createOrderCheckout);

router.use(authController.restrictTo('admin'));

router
  .route('/')
  .get(orderController.getAllOrders)
  .post(orderController.createOrder);

router
  .route('/:id')
  .get(orderController.getOrder)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;