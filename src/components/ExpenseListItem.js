import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

 //Expense List Item component

const ExpenseListItem = ({id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>${amount} -- Incurred:{moment(createdAt).format("MMM Do YYYY")}</p>
  </div>
);

export default ExpenseListItem;
