const p = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve({id:1,"name":"mongkol"});
      // reject(new Error('Error 404 Bad Request'));
    },2000);
});
console.log('Before Asynchronous Operation');
p.then((result)=>{
    console.log('This is resulte:',result);
})
.catch((err)=>{
    console.log(err.message);
});
console.log('After Asynchronous Operation');