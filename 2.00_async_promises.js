var promise = new Promise(function (resolve, reject) {
    resolve('FOO');
});
console.log('PROMISE', promise);
promise.then(function (res) {
    console.log('CALLED', res === 'FOO'); // I get called: true
});
promise["catch"](function (err) {
    console.log('ERR:', err);
});
promise.then(function (res) {
    console.log('THIS WILL FAIL', res === 'BAR');
});
promise["catch"](function (err) {
    console.log('ERR:', err);
});
var promiseTwo = new Promise(function (resolve, reject) {
    reject(new Error("Something awful happened"));
});
promiseTwo.then(function (res) {
    // This is never called
});
promiseTwo["catch"](function (err) {
    console.log('I get called:', err.message); // I get called: 'Something awful happened'
});
function foobar(stringy) {
    console.log(stringy);
    return stringy;
}
foobar('idiot');
// function delay(milliseconds: number, count: number): Promise<number> {
//     return new Promise<number>(resolve => {
//             setTimeout(() => {
//                 resolve(count);
//             }, milliseconds);
//         });
// }
// // async function always returns a Promise
// async function dramaticWelcome(): Promise<void> {
//     console.log("Hello");
//     for (let i = 0; i < 5; i++) {
//         // await is converting Promise<number> into number
//         const count:number = await delay(500, i);
//         console.log(count);
//     }
//     console.log("World!");
// }
// dramaticWelcome();
