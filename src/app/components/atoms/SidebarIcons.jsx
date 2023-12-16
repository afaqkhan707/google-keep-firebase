import React, { useContext } from 'react';
import Image from 'next/image';
import './SidebarIcons.css';
import { ContextKeep } from '@/app/context/ContextKeep';

const SidebarIcons = ({ icon, text, altxtsideicon }) => {
  const { toggleSideBar } = useContext(ContextKeep);

  return (
    <>
      <div className='side-icons'>
        <div className='iconsCom'>
          <Image src={icon} alt={altxtsideicon} />
        </div>
        {toggleSideBar && (
          <div className='text'>
            <p>{text}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default SidebarIcons;
