const pro1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Data 1");
    },3000)
})

const pro2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Data 2");
    },4000)
})

const pro3 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Data 3");
    },2000)
})

const pro4 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Data 4");
    },5000)
})


Promise.all([pro1, pro2, pro3, pro4]).then((val) => console.log(val));

// 1. IF ALL RESOLVED: TB KYA OUTPUT HAI [res1, res2, res3, res4]
// 2. IF ALL REJECTED: TB KYA OUTPUT HAI [first rejected will be printed]
// 3. SIRF 1 REJECT: TB KYA OUTPUT HAI 

Promise.allSettled([pro1, pro2, pro3, pro4]).then((val) => console.log(val));

// 1. IF ALL RESOLVED: TB KYA OUTPUT HAI [{status, res}]
// 2. IF ALL REJECTED: TB KYA OUTPUT HAI [{status, res}]
// 3. SIRF 1 REJECT: TB KYA OUTPUT HAI  [{status, res}]

Promise.any([pro1, pro2, pro3, pro4]).then((val) => console.log(val));
Promise.race([pro1, pro2, pro3, pro4]).then((val) => console.log(val));


