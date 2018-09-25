import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters'


const ExpenseDashboardPage = () => (
  <div>
    <h1>
      <ExpenseListFilters />
      <ExpenseList />
    </h1>
  </div>
);

export default ExpenseDashboardPage; 