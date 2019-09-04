const promise = new Promise((resolve, reject) => {
    resolve('FOO');
})

console.log('PROMISE', promise)

promise.then((res) => {
    console.log('CALLED', res === 'FOO'); // I get called: true
})

promise.catch((err) => {
    console.log('ERR:', err)
})

promise.then((res) => {
    console.log('THIS WILL FAIL', res === 'BAR')
})

promise.catch((err) => {
    console.log('ERR:', err)
})


const promiseTwo = new Promise((resolve, reject) => {
    reject(new Error("Something awful happened"));
})

promiseTwo.then((res) => {
    // This is never called
})

promiseTwo.catch((err) => {
    console.log('I get called:', err.message); // I get called: 'Something awful happened'
})

function foobar(stringy: string): string {
    console.log(stringy)
    return stringy
}

foobar('idiot')

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