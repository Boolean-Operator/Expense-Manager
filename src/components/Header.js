import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
  <header>
    <h1>Expensify Header</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard-*-</NavLink>
    <NavLink to="/create" activeClassName="is-active">Add Expense-*-</NavLink>
  </header>
)
export default Header;