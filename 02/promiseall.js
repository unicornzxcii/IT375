const myPromise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('First');
        resolve(1);
    },3000);
});
const myPromise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Second');
       // resolve(2);
       reject(new Error('Error in Second'));
    },2000);
});
Promise.race([myPromise1,myPromise2])
.then((results)=>{
    console.log(results);
})
.catch((error)=>{
    console.log(error.massage);
});