import * as firebase from 'firebase';


const config = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "expensify-f64e2.firebaseapp.com",
  databaseURL: "https://expensify-f64e2.firebaseio.com",
  projectId: "expensify-f64e2",
  storageBucket: "expensify-f64e2.appspot.com",
  messagingSenderId: "21328230656"
};

firebase.initializeApp(config);

const database = firebase.database();

// ONE TIME - EVENT LISTENER - 
database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);

  }).catch((error) => {
    console.log('Dave, I afraid something has gone terribly wrong. ', error);
  });
  
// EVENT LISTENER - SUBCRIPTION - ANY CHANGES
database.ref('expenses')
  .on('value', (snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);

  }, (error) => {
    console.log('Dave, I afraid something has gone terribly wrong. ', error);
  });

// EVENT LISTENER - CHILD REMOVED
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// EVENT LISTENER - CHILD CHANGED
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// EVENT LISTENER - CHILD CHANGED
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// ADD ITEM TO DATABASE
setTimeout(() => {
  database.ref('expenses').push({
    description: 'Gas Bill',
    note: 'Oct 2018',
    amount: 7575,
    createdAt: 12458654
  });
}, 2500);

// UPDATE ITEM BY ID
const updateId = "-LRS-4pFWaLFGmF_8rv5";

setTimeout(() => {
  database.ref(`expenses/${updateId}`).update({
    note: 'New client website launch'
  });
}, 2500);

// UPDATE ITEM BY ID
database.ref(`expenses/${updateId}`).update({
  amount: 1752,
  description: 'Rent',
 note: 'November 2018',
 createdAt: 124578
});

// REMOVE ITEM
const removeId = "-LRS0crSDS1Z2s53rUSU";
setTimeout(() => {
  database.ref(`expenses/${removeId}`)
    .remove()
    .then(() => {
      console.log('Item removed');
    }).catch((error) => {
      console.log("Dave, I afraid I can't do that.", error);
    });
}, 1500);
