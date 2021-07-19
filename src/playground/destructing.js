// OBJECT DESTRUCTING

// const person = {
//     name: 'Chris',
//     age: 61,
//     location: {
//         city: 'UP',
//         temp: 75
//     }
// };
//
// // const name = person.name;
// // const age = person.age;
// const {name: firstname = 'Anonymous', age} = person;
// console.log( `${firstname} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }
//
// const book = {
//     title: 'Title here',
//     author: 'Joe Schmoe',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const { name: publisherName = 'Self-published' } = book.publisher;
// console.log(publisherName)

// ARRAY DESTRUCTING

const address = [
    '1299 South Street',
    'College Park',
    'MD',
    '20782'
];

const [, city, state] = address;

console.log(`You are in ${city} ${state}`);

const item = [
    'Coffee (hot)',
    '$2',
    '$2.50',
    '$2.75'
];

const [drink, , medPrice] = item;

console.log(`A medium ${drink} costs ${medPrice}`);