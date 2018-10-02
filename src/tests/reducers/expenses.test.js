import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'
import  moment from 'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: "@@INIT"});
  expect(state).toEqual([]);
});


test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]])
});


test('should not remove expense id id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
});


test('should add expense', () => {
  const expense = {
    id: 109,
    description: 'Laptop',
    note: '',
    amount: 29500,
    createdAt: 20000
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense])
});


test('should edit expense by id', () => {
  const note = 'edit test note'
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      note: note
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe(note)
});


test('should not edit expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description: 'October Car Payment'
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
});
