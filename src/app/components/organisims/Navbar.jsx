import React, { useState } from 'react';
import NavbarRightSide from '../molecules/NavbarRightSide';
import SearchInput from '../atoms/SearchInput';
import LeftNav from '../molecules/LeftNav';
import './Navbar.css';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <nav className='navbar'>
        <LeftNav />
        <SearchInput />
        <NavbarRightSide isAuthenticated={isAuthenticated} />
      </nav>
    </>
  );
};

export default Navbar;
