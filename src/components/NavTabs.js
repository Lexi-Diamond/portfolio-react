import React from 'react';
import { Link } from 'react-router-dom'
// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// desctructring currentPage and handle page change so we can extract key value pairs
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
    </ul>
  );
}

export default NavTabs;
