import React from 'react';
import { Link } from 'react-router-dom'
  
const NotFoundPage = () => (
  <div>
    <h2>
      !404! -Page Not Found- <Link to="/">Return to Home Page</Link>
    </h2>
  </div>
);

export default NotFoundPage;