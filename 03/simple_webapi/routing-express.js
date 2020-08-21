//step1
const express = require('express');
const app = express();

const port = process.env.PORT || 8000;
//step 2  obj express methods
app.get('/',(req,res)=>{
    res.send('Hello from server');
});

app.get('/api/user',(req,res)=>{
    const userData = {id:15,name:'mongkol'};
    res.send(userData);
});
//step 3 listen
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
});

