import React from 'react';
import Image from 'next/image';
import refreshIcon from './img/refreshIcon.svg';

const RefreshIcon = () => {
  return (
    <>
      <div>
        <Image src={refreshIcon} alt='' />
      </div>
    </>
  );
};

export default RefreshIcon;
