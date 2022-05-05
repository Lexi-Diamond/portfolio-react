import React from 'react';
import NavTabs from './NavTabs';

const styles = {
  headerContainer: {
    display: 'flex',
  },
  logo: {
    flex: 1,
  }
}
export default function Header() {
  return (
    <div style={styles.headerContainer}>
      <h1 style={styles.logo}>Alexis Diamond</h1>
      <NavTabs />
    </div>
  );
}
