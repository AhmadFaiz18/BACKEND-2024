const fruits = require('./data.js');

const index = () => {
    for (const fruit of fruits) {
        console.log(fruit);
    }
};

const store = (name) => {
    fruits.push(name);
    console.log(fruits.join('\n'));
};

const update = (position, name) => {
    if (position >= 0 && position < fruits.length) {
        fruits[position] = name;
        console.log(fruits.join('\n'));
    } else {
        console.log(`Invalid position: ${position}`);
    }
};

const destroy = (position) => {
    if (position >= 0 && position < fruits.length) {
        fruits.splice(position, 1);
        console.log(fruits.join('\n'));
    } else {
        console.log(`Invalid position: ${position}`);
    }
};

module.exports = {index,store,update,destroy};
