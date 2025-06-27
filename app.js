// const names = require('./utils')
// const sayHi = require('./function')
// require('./sum')
// const sum = require('./sum')

// console.log(sum);


// console.log(names);

// sayHi(names.allnames.yulianto)

// console.log(sayHi)

const _ = require('lodash')

const items = [1, [2, 3, [4]]]

const newItems = _.flattenDeep(items);

console.log(newItems)

console.log("hello people " +  123)

console.log('first');

setTimeout(() => {
    console.log('second');
}, 0)

setTimeout(() => {
    console.log('tesss');
}, 0)

console.log('third');

const {readFile, writeFile} = require('fs').promises;

// const util = require('util');

// const readFilePromise = util.promisify(readFile)

// const writeFilePromise = util.promisify(writeFile)

// const getText = (path) => {
//     return new Promise((resolve, reject)=> {
//         readFile(path, 'utf8', (err, data) => {
//         if (err) {
//             reject(err);
//         } else {
//             resolve(data)
//         }
//         })
//     })
// }

// getText('./content/subfolder/result-async.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

const start = async() => {
    try {
        const first = await readFile('./content/subfolder/result-async.txt', 'utf8')
        const second = await readFile('./content/subfolder/result-sync.txt', 'utf8')
        const third = await readFile('./content/subfolder/result-promises.txt', 'utf8')
        await writeFile('./content/subfolder/result-promises.txt', `This is awesome : ${first} ${second}`)
        console.log(first);
        console.log(second);
        console.log(third);
        
    } catch (error) {
        console.log(error);
    }
}

start()
