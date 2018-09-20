import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense } from './actions/expenses'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters'
import  getVisibleExpenses  from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

//  getVisibleExpenses
store.subscribe(()=> {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses);
});

//  addExpense Water bill
store.dispatch(addExpense({
  description: 'Water bill',
  amount: 2500,
  createdAt: 52000,
  note: 'Lots of dishes done'
}));


//  addExpense Gas bill
store.dispatch(addExpense({
  description: 'Gas bill',
  amount: 23000,
  createdAt: 85000,
  note: 'Had to heat the water for dishes to get done'
}));

//  setTextFilter bill -> water
store.dispatch(setTextFilter('bill'))

store.dispatch(sortByDate())

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses);


ReactDOM.render(<AppRouter />, document.getElementById('app'))

