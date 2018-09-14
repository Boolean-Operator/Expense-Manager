import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    <h1>
      Expense Dashboard component
    </h1>
  </div>
);

const AddExpensePage = () => (
  <div>
    <h1>
      Add Expense component
    </h1>
  </div>
);

const EditExpensePage = () => (
  <div>
    <h1>
      Edit Expense component
    </h1>
  </div>
);
    
const HelpPage = () => (
  <div>
    <h1>
      Help Page component
    </h1>
  </div>
);
  
const NotFoundPage = () => (
  <div>
    <h2>
      !404! -Page Not Found- <Link to="/">Return to Home Page</Link>
    </h2>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify Header</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard-*-</NavLink>
    <NavLink to="/create" activeClassName="is-active">Add Expense-*-</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense-*-</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
  </header>
)

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'))

