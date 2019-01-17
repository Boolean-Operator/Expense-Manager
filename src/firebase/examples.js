import * as firebase from 'firebase';

// Set auth and apiKey for firebase project
const config = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
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
----
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


 // One Time Event Listener 
 // Log object to console
 // ----ONCE('VALUE')
database.ref('location/city')
  .once('value')
  .then((snapshot) =>  {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((error) => {
    console.log('Something has gone terribly wrong', error);
  });
 // ----



 // Update existing data
 // ----UPDATE()
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
 // ----




 // Remove Date
 // ---- REMOVE()
database
  .ref("isSingle")
  .remove()
  .then(() => {
    console.log("Data removed");
  }).catch((error) => {
    console.log('Something has gone terribly wrong: ', error);
  });
 // ----



 // Change Existing Data
 // ---- REF().SET()
database
  .ref("age")
  .set(27)
  .then(() => {
    console.log("Data is updated");
  })
  .catch(error => {
    console.log("Something has gone terribly wrong: ", error);
  });

database
  .ref("location/city")
  .set("Camden")
  .then(() => {
    console.log("Data is updated");
  })
  .catch(error => {
    console.log("Something has gone terribly wrong: ", error);
  });
 // ----


 // Add attributes to data using SET'
 // ---- SET()
database
  .ref("attributes")
  .set({
    height: 75,
    weight: 225
  })
  .then(() => {
    console.log("Data is updated");
  })
  .catch(error => {
    console.log("Something has gone terribly wrong: ", error);
  });
 // ----

