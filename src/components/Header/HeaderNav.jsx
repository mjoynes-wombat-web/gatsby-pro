import React, { Component } from 'react';
import Link from 'gatsby-link';

const HeaderNav = () => (
  <nav>
    <style jsx global>
      {`
      ul {
        list-style: none;
        display: flex;

        li {
          margin-left: 10px;

          a {
            color: white;
            text-decoration: none;
            transition: transform 0.3s;
            display: inline-block;

            :hover {
              transform: scale(1.1);
            }
          }
        }
      }
      `}
    </style>
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
);

export default HeaderNav;
