const express =require('express');
const router = express.Router();


const restaurants = require('../data');

router.get('/',(req,res)=>{
    res.json(restaurants);
    });
    router.get('/:id',(req,res)=>{
    res.send('GET ONE API');
    });
    router.post('/',(req,res)=>{
    res.send('POST API');
    });
    router.put('/:id',(req,res)=>{
    res.send('PUT API');
    });
    router.delete('/:id',(req,res)=>{
    res.send('DELETE API');
    });
    
module.exports = router;