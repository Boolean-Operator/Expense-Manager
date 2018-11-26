import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

//Add Expense Component
export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/')
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
        </h1>
      </div>    
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
   startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

  export default connect(undefined, mapDispatchToProps)(AddExpensePage);