//step 1
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
//step 2


// it studen
const itStudents = [
 {id:61,name:'mongkol IT'},
 {id:61,name:'kumpan IT'}
];
//ce studen
const ceStudents = [
    {id:71,name:'jame ce'},
    {id:71,name:'cake ce'}
   ];

   //major
const allMajors = {
    'it': itStudents,
    'ce': ceStudents
};
    // route1
app.get('/api/:major',(req,res,next)=>{
    const major = req.params.major.toLowerCase();
    if(major== 'it'){
        const jsonString = JSON.stringify(itStudents);
        req.myobj = jsonString;
        next();
    }else if (major == 'ce'){
        const jsonString = JSON.stringify(ceStudents);
        req.myobj = jsonString;
        next();
    }else{
        res.send('wrong parameter');
    }
},(req,res)=>{
    req.myobj += 'End of data';
    res.send(req.myobj);
}
);
//step 3
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
});
