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
const removeExpense = ({
  id
} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id: id
});

//  EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id: id,
  updates: updates
});


export { addExpense, removeExpense, editExpense, startAddExpense } 