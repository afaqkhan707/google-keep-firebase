'use client';
import React, { useState } from 'react';
import Sidebar from '../molecules/Sidebar';
import '../organisims/MainSection.css';
import Note from '../molecules/Note';
// import ThemeBox from "../molecules/ThemeBox.jsx";

const MainSection = () => {
  return (
    <>
      <section className='main-section'>
        <Sidebar />
        <div className='main-sub-section'>
          <Note />
          {/* <ThemeBox /> */}
        </div>
      </section>
    </>
  );
};

export default MainSection;
