import React from 'react';
// Calculate expenses total

const selectExpensesTotal = (expenses) => {
    return expenses
      .map(expense => expense.amount)
      .reduce((acc, cur ) => acc + cur, 0)
};

export default selectExpensesTotal;
