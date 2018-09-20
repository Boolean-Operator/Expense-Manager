// // Object Destructuring

// const person = {
//   name: 'Mark',
//   age: 52,
//   location: {
//     city: 'Dover',
//     temp: 78
//   }
// };


// const { name: firstName = 'Anon', age } = person;
// console.log(`${firstName} is ${age}.`);


// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`Its ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName);


//  Array Destructuring

const address = ['1299 S Juniper Street', 'Dover', 'Delaware', '19901'];
const [street, city, state, zip] = address;

console.log(`You are in ${city}, ${state}`);


const item = ['Coffee (hot)', '$2.00', '$2.25', '$2.75'];
const [ itemName, smPrice, medPrice, lgPrice] = item;

console.log(`A medium ${itemName} costs ${medPrice}`)
