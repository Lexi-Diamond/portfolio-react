import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import header from './header';
import Contact from './pages/Contact';
import projects from './pages/projects';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // TODO: Add a comment describing the functionality of this method
  // renders each page if the current page is home render home page etc
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'projects') {
      return <projects />;
    }
    if (currentPage === 'Contact')
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props we are passing current page and handle page change*/}
      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line calling above function to render the page */}
      {renderPage()}
    </div>
  );
}
