import React from 'react';
import Image from 'next/image';
import './HeaderIcon.css';

const HeaderIcon = ({ icon, title, alt, onClick }) => {
  return (
    <div className='icon-box' onClick={onClick} title={title}>
      <Image src={icon} alt={alt} />
    </div>
  );
};

export default HeaderIcon;
