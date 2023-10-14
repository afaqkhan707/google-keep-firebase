import React from 'react';
import './Noteicons.css';
import Image from 'next/image';


const NoteIcons = ({icon,alttxt,onClick}) => {
  return (
    <>
<div className="icons">
    <Image src={icon} alt={alttxt} onClick={onClick} />
</div>
    </>
  )
}

export default NoteIcons;