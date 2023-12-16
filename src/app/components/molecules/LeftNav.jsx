import hamburgerIcon from '../atoms/img/hamburgerIcon.svg';
import HeaderIcon from '../atoms/HeaderIcon';
import './LeftNav.css';
import Logo from '../atoms/Logo';
import { useContext, useState } from 'react';
import { ContextKeep } from '@/app/context/ContextKeep';

const LeftNav = () => {
  const { setToggleSideBar } = useContext(ContextKeep);

  const toggleLeftSideBar = () => {
    setToggleSideBar(true);
  };
  return (
    <>
      <div className='LeftSideBar'>
        <HeaderIcon
          icon={hamburgerIcon}
          title='Main Menu'
          alt='hamburger-icon-svg'
          onClick={toggleLeftSideBar}
        />
        <Logo />
        <h3>Keep</h3>
      </div>
    </>
  );
};

export default LeftNav;
