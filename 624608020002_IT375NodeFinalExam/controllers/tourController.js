
const Tests = require('../models/tourModel');
exports.getAllTours =async(req,res) => {
   /* try{
        const tests = await Tests.find();
        res.status(200).json(  {
        status:'success',
        results: tests.length,
        data: {tests}
        });
        }catch (err){
        res.status(404).json({
        status: 'fail',
        message: err
        });}
       */
      try {
        const tests = await Tests.find();
        res.status(200).render("main",{
        status:'success',
        results: tests.length,
        data: {tests}
        });
        }catch(err){
        res.status(404).json({
        status: 'fail',
        message: err
        });
        
        }
            };

exports.getOneTour = async(req,res) => {
    try{
        const restaurantId = parseInt(req.params.id);
        const tests = await Tests.findOne({id: (restaurantId)});
        if(tests){
        res.status(200).json({
        status:'success',
        data: {tests}
        });
        }else{
        res.status(404).json({
        status:'fail',
        message: 'no id found'
        });
        }
        }catch(err){
        res.status(404).json({
        status:'fail',
        message: err
        });
        
        }
};
exports.createNewTour = async(req,res) => {
   try{
   /*  const newRestaurant = await Restaurant.create(req.body);
    res.status(201).json({
    status:'success',
    data: {restaurant: newRestaurant}
    });*/
    let currentRestaurantId = await Tests.find({}).sort({id: -1}).limit(1).then((lastRestaurant) => {
        return lastRestaurant[0].id

    });
    currentRestaurantId += 1;
const creatRestaurant = {
id: currentRestaurantId,
...req.body
};
const newRestaurant = await Tests.create(creatRestaurant);
res.status(201).json({
status:'success',
data: {tests: newRestaurant}
});
    }catch(err){
    res.status(400).json({
    status:'fail',
    message: err
    });
    
    }
    };
exports.updateTour = async(req,res) => {
    try{
        const restaurantId = parseInt(req.params.id);
        const tests = await Tests.findOneAndUpdate({id: restaurantId},req.body,{
        new: true,
        runValidators: true
        });
        if(tests){
        res.status(200).json({
        status:'success',
        data: {tests}
        });
        }else{
        res.status(404).json({
        status:'fail',
        message: 'no id found'
        });
        }
        }catch(err){
        res.status(404).json({
        status: 'fail',
        message: err
        });
        }
};
exports.deleteTour = async(req,res) => {
    try{
        const restaurantsId = parseInt(req.params.id);
        const tests = await Tests.findOneAndDelete({id: parseInt(restaurantsId)});
        if(tests){
        res.status(200).json({
        status:'success',
        data: null
        });
        }else{
        res.status(404).json({
        status:'fail',
        message: 'no id found'
        });
        }
        }catch(err){
        res.status(404).json({
        status: 'fail',
        message: err
        });
        
        }
};