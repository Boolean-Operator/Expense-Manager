import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary';

// remove h1 tags
const ExpenseDashboardPage = () => (
  <div>
    <h1>
      <ExpensesSummary />
      <ExpenseListFilters />
      <ExpenseList />
    </h1>
  </div>
);

export default ExpenseDashboardPage; 