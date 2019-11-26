// console.log('hi')

// setTimeout(() => {
//     console.log('times up');
// }, 1000)


//setTimeout is non-blocking.

// timeout();

// Single thread

// console.log('bye')

//Order is hi, bye, times up since times up will take 2 seconds to print. 

// Even if time is set to 0, setTimeout will make it print after 'bye' since it is async

// function timeout() {
//         console.log('lettuce')
//         //this is a blocking call
//         setTimeout(()=> {
//             console.log('waiting')
//         }, 1000)
//         console.log('cabbage')
//     }


//Promises
// Promises have 2 terminal states: resolved, rejected
// Promise has 1 intermediate state: pending

// const task1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('one');
//         resolve();
//     }, 1000)
// });

// console.log(task1);
// task2();


// function task2() {
//     console.log('two');
// }

//Calling task2() will print two before bye since it is async.
//Use .then to call it after the promise is resolved.

// task1.then(() => {
//     task2();
// })


// task1.then(task2, task3)

// function task3() {
//     console.log('three')
// }

//If task1 is resolved, then task2 is resolved. If not, task3 is resolved.

// task1
//     .then(task2)
//     .catch(task3)

//If task1 is resolved then call task2, if it is rejected call task3

//Wjat does Promise.prootype.then take in as args?
// first arg is a cb that is exectued on resolve
// second arg is a cb that is executed on reject

// What does Promise.prototype.catch take in as arg?
// Just the reject cb



// const p1 = new Promise((resolve) => {
//     setTimeout(()=> {
//         resolve('one')
//     }, 1000)
// });

// const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('two')
//     }, 4000)
// });

// const p3 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('three')
//     }, 2000)
// });


// const requests = [p1, p2, p3]

// pass an array of promise objects

// Promise.all(requests)
//     .then((result) => {
//         console.log(result);
//     })

// ['one', 'two', 'three']

// To choose the fastest response:
// Promise.race(requests).then( (res) => {
//     console.log('The winner is', res);
// })

// If it returns a promise you can use await.
// Await makes it look like a synchronous function. Stops executing until the promise is resolved.


// async function myAjax() {
//     const prom = fetch('https://api.github.com/users/azablan')
//     .then((response) => {
//         console.log('hello')
//         console.log('async!')
//         return response.json();
//     });
//     console.log('before await');
//     const data = await prom;
//     console.log('after await');
//     console.log(data.name);
// }

// myAjax()

//before await, hello, after await, az



// An async function returns a promise. When it is returned, it is the resolved value. 


// async function foo() {
//     const someAsync = new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('broccoli')
//             resolve('first');
//         }, 1000)
//     })
//     console.log('potato');
//     someAsync
//     console.group('kale');
// }

// foo();
//potato, kale, broccoli



async function foo() {
    const someAsync = new Promise((resolve) => {
        setTimeout(() => {
            console.log('broccoli')
            resolve('first');
        }, 1000)
    })
    console.log('potato');
    await someAsync
    console.group('kale');
}

foo();
// potato, broccoli, kale


