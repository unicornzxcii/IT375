const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');

router
.route('/')
.get(tourController.getAllTours)
.post(tourController.createNewTour);
//router.get('/',restaurantController.getAllRestaurants);

router
.route('/:id')
.get(tourController.getOneTour)
.put(tourController.updateTour)
.delete(tourController.deleteTour);
module.exports = router;