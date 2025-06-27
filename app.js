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


