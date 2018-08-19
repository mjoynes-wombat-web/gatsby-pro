import React, { Component } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import logo from '../images/logo.svg';
// Global styles

const Header = ({ data: { background }, location }) => (
  <div
    className={`${
      location.pathname === '/'
        ? 'open'
        : 'closed'}
      header`}
  >
    <style jsx global>
      {`
      .header{
        background: #524763;
        overflow: hidden;
        position: relative;
        height: 60vh;
        transition: height 0.3s;
        &.open {
          height: 60vh;
        }
        &.closed {
          height: 20vh;
        }
        .text-wrapper {
          margin: 0 auto 1.45rem auto;
          max-width: 960px;
          padding: 1.45rem 1.0875rem;
          position: relative;
          z-index: 2;
          h1 {
            a {
              color: white;
              text-decoration: none;
              img {
                height: 80px;
              }
            }
          }
        }

        .gatsby-image-outer-wrapper {
          position: static!important; 
        }

        .billboard {
          position: absolute!important;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
      }
      `}
    </style>
    <div className="text-wrapper">
      <h1 style={{ margin: 0 }}>
        <Link to="/">
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
    <Img className="billboard" sizes={background.sizes} />
  </div>
);

export default Header;
