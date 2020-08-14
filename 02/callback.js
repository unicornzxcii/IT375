const myRequest = (data,callback) =>{
    const response = 10+data;
    const error = undefined; 
            const result= callback(error,response);
    return result;
}
// const myCallback = (error,res)=>{
//     if(error)
//         return 'you have got error';
//     else
//         return res;
// }
const result = myRequest(1,(error,res)=>{
    if(error)
        return 'you have got error';
    else
        return res;
});
console.log(result);