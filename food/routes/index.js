const express = require('express');
const router = express.Router();

const restaurantsObj = require('../data');
// Render Web
router.get('/',(req,res)=>{
res.render('main',{restaurants:restaurantsObj}); // main.ejs
});
module.exports = router;