import React from 'react';
import { connect } from 'react-redux';
import  ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

// Edit Expense Component
export class EditExpensePage extends React.Component {
  
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onClick = () => {
    this.props.removeExpense({id:this.props.expense.id});
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Edit Expense
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button
          expense={this.props.expense}
          onClick={this.onClick}>Remove</button>
        </h1>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data))
});
    
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);