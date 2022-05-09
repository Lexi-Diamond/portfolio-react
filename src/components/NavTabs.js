import React from 'react';
import { Link } from 'react-router-dom'
const styles = {
  navbar: {
    justifyContent: 'flexEnd',
  }
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul style={styles.navbar}className="nav nav-tabs">
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About
          </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/projects">
          Projects
          </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/contact">
          Contact
          </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/resume">
          Resume
          </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
