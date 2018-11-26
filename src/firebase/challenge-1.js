import * as firebase from 'firebase';

// Set auth and apiKey for firebase project
const config = {
  apiKey: "AIzaSyBa6A0V2TAX4b_4QQZUIhLEbrINKxHFnM4",
  authDomain: "expensify-f64e2.firebaseapp.com",
  databaseURL: "https://expensify-f64e2.firebaseio.com",
  projectId: "expensify-f64e2",
  storageBucket: "expensify-f64e2.appspot.com",
  messagingSenderId: "21328230656"
};

firebase.initializeApp(config);

const database = firebase.database();

 // Dummy data 
 // ---- 
database
  .ref()
  .set({
    name: 'Mark Graybill',
    age: 51,
    stressLevel: 5,
    job: {
      title: 'Software Developer',
      company: 'Google'
    },
    location: {
      city: 'Dover',
      country: 'United States'
    }
  }).then(() => {
    console.log('Data is updated');
  }).catch((error) => {
    console.log('Something has gone terribly wrong: ', error);
  });
 //----


// CHALLENGE
// Set up subscription - Event Listener
// Output to Console -> "Mark is a Software Dev at Amazon."
// ----
const onValueChange = database.ref().on('value', (snapshot) =>  {
    const val = snapshot.val();
    console.log(val);
    
    const {age, job:{company: company, title: title} , name, stressLevel} = val
    console.log(`${name} is a ${title} with ${company}`);
    console.log(`His stress level is a ${stressLevel} on a scale of 1 - 10.`);
  }, (error) => {
    console.log("Something has gone terribly wrong: ", error );
  });

database
  .ref()
  .update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
  })
  .then(() => {
    console.log("Data is updated");
  })
  .catch(error => {
    console.log("Something has gone terribly wrong: ", error);
  });

setTimeout(() => {
  database.ref().update({
    'job/company': 'Starbucks',
    'job/title': 'Barrista',
  stressLevel: 11 });
}, 3500);

setTimeout(() => {
  database.ref().off('value', onValueChange);
}, 7500);

setTimeout(() => {
  database.ref('name').set('Chad');
}, 10500);

// ----
