import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container header-marging">
      <img
          alt="Page not founf"
          src={`/images/not-found.jpg`}
          className=""
      />
      <Link to="/" className="primary-btn">Go to Home</Link>
    </div>
  );
};

export default NotFound;