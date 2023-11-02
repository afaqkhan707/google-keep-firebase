'use client';
import React, { useContext, useEffect, useState } from 'react';
import HeaderIcon from '../atoms/HeaderIcon';
import refreshIcon from '../atoms/img/refreshIcon.svg';
import viewlistIcon from '../atoms/img/viewlistIcon.svg';
import settingsIcon from '../atoms/img/settingsIcon.svg';
import appsIcon from '../atoms/img/appsIcon.svg';
import { TotalContext } from '@/app/controllers/TodoListStore';
import { auth, onAuthStateChanged } from '../../firebase/firebaseConfig';
import { useRouter } from 'next/router';
import ProfileDropDown from '../atoms/ProfileDropDown';
import './NavbarRightSide.css';
import Link from 'next/link';
import { usersContext } from '@/app/controllers/UsersStore.jsx';

const NavbarRightSide = () => {
  const todoStore = useContext(TotalContext);

  const { user } = useContext(usersContext);

  // const [isAuthenticated, setisAuthenticated] = useState(false);
  useEffect(() => {
    if (user) {
      console.log(user.email, 'is Logged In');
    }
  }, [user]);
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      console.log(user.email, 'is Logged out');
      router.push('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleRefreshClick = () => {
    window.location.reload();
  };

  return (
    <>
      <div className='navbar-right-side'>
        <span>{todoStore?.notesList?.length || 0}</span>
        <HeaderIcon
          icon={refreshIcon}
          title='Refresh'
          onClick={handleRefreshClick}
          alt='refresh-icon-svg'
        />
        <HeaderIcon icon={viewlistIcon} title='List view' alt='view-icon-svg' />
        <HeaderIcon
          icon={settingsIcon}
          title='Settings'
          alt='settings-icon-svg'
        />
        <HeaderIcon icon={appsIcon} title='apps' alt='apps-icon-svg' />
        <ProfileDropDown />
        {user ? (
          <button onClick={handleSignOut} className='signout-btn'>
            Log out
          </button>
        ) : (
          <button className='signout-btn'>
            <Link href={'signin'}> Log In</Link>
          </button>
        )}
      </div>
    </>
  );
};

export default NavbarRightSide;
