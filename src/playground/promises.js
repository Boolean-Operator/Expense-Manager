const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Mark',
      age: 41
    });
    // reject('Something went terribly wrong.')
  }, 3000);
});

console.log('before response');

promise.then((data) => {
  const resData = data;
  console.log('Name:', resData.name);
  console.log('Age:', resData.age);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after response');
