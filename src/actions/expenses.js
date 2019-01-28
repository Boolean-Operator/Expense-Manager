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
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = {description, note, amount, createdAt}

    return database.ref('expenses').push(expense).then((ref) => {
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
  return (dispatch) => {
    return database.ref(`expenses/${id}`)
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

//  SET_EXPENSES
const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// fetch all expense data once
// Parse that data to array
// dispatch expenses, instead of c.log

const startSetExpenses = () => {
  return (dispatch) => {

  // Fetch all expense data once
  // Parse data into array
  // Dispatch SET_EXPENSES
    return database.ref('expenses')
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
  setExpenses,
  startSetExpenses
}