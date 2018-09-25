//  Higher Order Component (HOC) - A component (HOC) that renders another component
//  Reuse code
//  Render Hijacking
//  Prop manipulation
//  Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This is the Info information: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private information. Do not share.</p>}
      
      <WrappedComponent {...props} />
    </div>
  );
};

//  requireAuthentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
    {
      // props.isAuthenticated value of true showes component - false showes message "Please log in to view info."
        props.isAuthenticated 
        ? <WrappedComponent {...props} />
        : <h3>Please Login to view the information</h3>
      }
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="Additional Details to follow" />, document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenticated={true} info="Additional Details to follow" />, document.getElementById('app'));
