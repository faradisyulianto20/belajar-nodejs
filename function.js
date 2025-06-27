const sayHi = (name) => {
    console.log(`Hi, ${name}`)
}

module.exports = sayHi

const person = {
    name : 'Bob'
}

module.exports.names = ['item1', 'item2'];
module.exports.person = person;