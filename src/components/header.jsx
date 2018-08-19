import React from 'react';
import Link from 'gatsby-link';

import logo from '../images/logo.svg';
// Global styles

const Header = () => (
  <div className="header">
    <style jsx>
      {`
      .header{
        background: #524763;
        margin: 0 auto 1.45rem auto;
        max-width: 960px;
        padding: 1.45rem 1.0875rem;
        h1 {
          img {
            height: 80px;
          }
        }
      }
      `}
    </style>
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <img src={logo} alt="Level Up Tuts Logo" />
      </Link>
    </h1>
    <nav>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
