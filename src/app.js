import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense } from './actions/expenses'
// import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters'
import  getVisibleExpenses  from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


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
  amount: 25000,
  note: 'Lots of dishes done'
}));

//  addExpense Rent
const rent = store.dispatch(addExpense({
  description: 'Rent',
  amount: 950000,
  note: 'Keep the roof overhead'
}));

//  addExpense Gas bill
store.dispatch(addExpense({
  description: 'Gas bill',
  amount: 2300,
  note: 'Had to heat the water for dishes to get done'
}));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses);

const jsx = (
  <Provider store ={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'))

const demoStateTree = {
  expenses: [{
    id: 'random',
    description: 'Jan Rent Payment',
    note: 'This was the final rent payment',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'Lunch',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
