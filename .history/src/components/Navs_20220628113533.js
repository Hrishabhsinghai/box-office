import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map(item => (
          <li>
            {' '}
            <Link to={item.to}>Go to starred page</Link>
          </li>
        ))}
        <li>
          <Link to="/starred">Go to starred page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navs;
