import React from "react";
import Image from "next/image";
import "./HeaderIcon.css";

const HeaderIcon = ({ icon,title,alt,onClick}) => {
  return (
    <div className="icon-box">
      <Image src={icon} title={title} onClick={onClick} alt={alt} />
    </div>
  );
};

export default HeaderIcon;
