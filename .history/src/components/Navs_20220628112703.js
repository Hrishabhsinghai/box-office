import React from 'react';
import { Link } from 'react-router-dom';

const Navs = () => {
  return (
    <div>
      <ul>
        <li>
          <Link t="/starred">Go to starred page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navs;
