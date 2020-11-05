const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

router
.route('/')
.get(restaurantController.getAllRestaurants)
.post(restaurantController.createRestaurant);
//router.get('/',restaurantController.getAllRestaurants);

router
.route('/:id')
.get(restaurantController.getRestaurant)
.put(restaurantController.updateRestaurant)
.delete(restaurantController.deleteRestaurant);
module.exports = router;