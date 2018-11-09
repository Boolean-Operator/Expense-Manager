import React from 'react';
import { NavLink } from 'react-router-dom';

// Header Component
const Header = () => (
  <header>
    <h1>Expensify Header</h1>
    <h2>
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard-*-</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    </h2>
  </header>
)
export default Header;