import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import NavbarRightSide from '../molecules/NavbarRightSide';
import SearchInput from '../atoms/SearchInput';
// import { onAuthStateChanged, auth } from '../../firebase/firebaseConfig';
import { usersContext } from '../../controllers/UsersStore';
import LeftSideBar from '../molecules/LeftSideBar';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authStore = useContext(usersContext);

  return (
    <>
      <nav className='navbar'>
        <LeftSideBar />
        <SearchInput />
        <NavbarRightSide isAuthenticated={isAuthenticated} />
      </nav>
    </>
  );
};

export default Navbar;
