const router = require('express').Router();
const authController = require('../controllers/authController');
const favouritController = require('../controllers/favouritController');

router.use(authController.protect);
router.route('/').post(favouritController.addFavourit);
router.route('/:id').get(favouritController.getFavByUserId);

router.delete('/deleteFa/:id/:user', favouritController.deleteFavItem);
router.delete('/deleteFa/:id/', favouritController.deleteFavouritTest);

module.exports = router;
