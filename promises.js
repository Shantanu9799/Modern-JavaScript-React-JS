/* DUMMY PROMISES */

const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 SUCCESS"), 3000);
  setTimeout(() => reject("p1 FAILURE"), 3000);
});
const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p2 SUCCESS"), 1000);
  setTimeout(() => reject("p2 FAILURE"), 1000);
});
const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p3 SUCCESS"), 2000);
  setTimeout(() => reject("p3 FAILURE"), 2000);
});




/* PROMISES */

// Promise.all()
// Promise.all([p1, p2, p3]).then((res) => console.log(res));
// all resolve
/*
(3) ['p1 SUCCESS', 'p2 SUCCESS', 'p3 SUCCESS']
0: "p1 SUCCESS"
1: "p2 SUCCESS"
2: "p3 SUCCESS"
length: 3
*/

// one or more failures
// Uncaught (in promise) p2 FAILURE



// Promise.allSettled()
// Promise.allSettled([p1, p2, p3]).then((res) => console.log(res));
// all resolve
/*
0: {status: 'fulfilled', value: 'p1 SUCCESS'}
1: {status: 'fulfilled', value: 'p2 SUCCESS'}
2: {status: 'fulfilled', value: 'p3 SUCCESS'}
length: 3
*/

// one or more failures
/*
0: {status: 'fulfilled', value: 'p1 SUCCESS'}
1: {status: 'rejected', reason: 'p2 FAILURE'}
2: {status: 'fulfilled', value: 'p3 SUCCESS'}
length: 3
*/



// Promise.race()
// Promise.race([p1, p2, p3]).then((res) => console.log(res));
// all resolve
/*
p2 SUCCESS
*/

// one or more failures
/*
index.html:1 Uncaught (in promise) p2 FAILURE
*/



// Promise.any()
// Promise.race([p1, p2, p3]).then((res) => console.log(res));
// all resolve
/*
p2 SUCCESS
*/

// one or more failures
/*
index.html:1 Uncaught (in promise) p2 FAILURE
*/

// all failures
/*
Uncaught (in promise) p2 FAILURE

promises.js:13 Uncaught (in promise) p3 FAILURE

promises.js:5 Uncaught (in promise) p1 FAILURE
*/