import React from 'react';
import './Noteicons.css';
import Image from 'next/image';

const NoteIcons = ({ icon, alttxt, onClick }) => {
  return (
    <>
      <div className='icons' onClick={onClick}>
        
        <Image src={icon} alt={alttxt} />
      </div>
    </>
  );
};

export default NoteIcons;
