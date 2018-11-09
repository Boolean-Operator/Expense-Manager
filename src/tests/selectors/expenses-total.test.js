import React from 'react';
import moment from 'moment';
import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total.js';

const expenses1 = [{
  id: "2",
  description: "Rent",
  note: "",
  amount: 109500,
  createdAt: moment(0)
    .subtract(4, "days")
    .valueOf()
}];

const expenses3 = [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 195,
    createdAt: 0
  },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: 109500,
    createdAt: moment(0)
    .subtract(4, "days")
    .valueOf()
  },
  {
    id: "3",
    description: "Credit Card",
    note: "",
    amount: 4500,
    createdAt: moment(0)
    .add(4, "days")
    .valueOf()
  }
];


// Tests to create

test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toEqual(0)
});

test('should correctly add up a single expense', () => {
  const result = selectExpensesTotal([expenses[1]]);
  expect(result).toEqual(109500)
});

test('should correctly add up miltiple expenses', () => {
  const result = selectExpensesTotal(expenses3);
  expect(result).toEqual(114195)
})


