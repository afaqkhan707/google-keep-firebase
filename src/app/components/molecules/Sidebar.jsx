'use client';
import React, { useContext } from 'react';
import SidebarIcons from '../atoms/SidebarIcons';
import lightbulbIcon from '../atoms/img/lightbulbIcon.svg';
import reminderIcon from '../atoms/img/notificationIcon.svg';
import editIcon from '../atoms/img/editIcon.svg';
import archiveIcon from '../atoms/img/archiveIcon.svg';
import deleteIcon from '../atoms/img/deleteIcon.svg';
import './sidebar.css';
import { ContextKeep } from '@/app/context/ContextKeep';

const Sidebar = () => {
  const { toggleSideBar, setToggleSideBar } = useContext(ContextKeep);
  const toggledSideBar = () => {
    setToggleSideBar(!toggleSideBar);
  };
  return (
    <>
      <div
        className='left-side-bar'
        style={
          toggleSideBar
            ? {
                maxWidth: '280px',
                boxShadow: '0px 0px 14px -9px #000',
                transition: 'all 0.5s',
              }
            : {}
        }
        onClick={toggledSideBar}
      >
        <div>
          <SidebarIcons
            icon={lightbulbIcon}
            text='Notes'
            altxtsideicon='lightbulbIcon-svg'
          />
          <SidebarIcons
            icon={reminderIcon}
            text='Reminders'
            altxtsideicon='reminderIcon-svg'
          />
          <SidebarIcons
            icon={editIcon}
            text='Edit Labels'
            altxtsideicon='editIcon-svg'
          />
          <SidebarIcons
            icon={archiveIcon}
            text='Archive'
            altxtsideicon='archiveIcon-svg'
          />
          <SidebarIcons
            icon={deleteIcon}
            text='Trash'
            altxtsideicon='trashIcon-svg'
          />
        </div>
        {toggleSideBar && (
          <div className='license'>
            <p> Open Source License</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
