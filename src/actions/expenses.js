import uuid from 'uuid';
import database from '../firebase/firebase';

// Expense Action Generators
// Components call action generators
// Action generators return function
// Components dispatch function
// Function runs ( dispatch other actions )

//  ADD_EXPENSE
const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense: expense
});

// starts Add Expense Action, 
const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = {description, note, amount, createdAt}

    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    });
  };
};

//  REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id: id
});

//starts Remove Expense Action
const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`)
        .remove()
        .then(() => {
          dispatch(removeExpense({ id }))
        }).catch((error) => {
          console.log("Dave, I afraid I can't do that.", error);
        });
  }
}

//  EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id: id,
  updates: updates
});

const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};

//  SET_EXPENSES
const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`)
      .once('value')
      .then((snapshot) => {
        const expenses = [];
    
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpenses(expenses));
    
      }).catch((error) => {
        console.log('Dave, I afraid something has gone terribly wrong. ', error);
      });
  }
};




export {
  addExpense,
  startAddExpense,
  removeExpense,
  startRemoveExpense,
  editExpense,
  startEditExpense,
  setExpenses,
  startSetExpenses
}