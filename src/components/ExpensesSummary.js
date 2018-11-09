// Expenses Summary Component

// Render in ExpenseDashboardPage

//Test with two snapshots
// Viewing 1 expense totalling $94.34 
// Viewing 2 expenses totalling $94.34

// Connect to store for:
  // expensesCount (of visible expenses)
  // expensesTotal (of visible expenses)

// Commit and Deploy to Heroku


import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal  = numeral(expensesTotal / 100).format('$0,0.00');
 
  return (
    <div>
      <h2>
        Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}
      </h2>
    </div>
  );
};
 
const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }

}

export default connect(mapStateToProps)(ExpensesSummary)

