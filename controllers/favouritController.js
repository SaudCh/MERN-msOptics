const Favourit = require('../models/favouritModel');
const factory = require('./handlerFactory');

exports.addFavourit = factory.createOne(Favourit);
exports.deleteFavourit = factory.deleteOne(Favourit);

exports.getFavByUserId = async (req, res, next) => {
  try {
    const favourit = await Favourit.find({ user: req.params.id }).populate(req.query.pop);
    res.status(200).json({
      status: 'success',
      data: {
        favourit,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteFavItem = async (req, res, next) => {
  await Favourit.deleteOne({ product: req.params.id, user: req.params.user });
  res.status(204).json({
    status: 'success',
  });
};

exports.deleteFavouritTest = async (req, res, next) => {
  await Favourit.deleteOne({ _id: req.params.id });
  res.status(204).json({
    status: 'success',
  });
};
