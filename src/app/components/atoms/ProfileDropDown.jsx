import React, { useContext, useEffect, useState } from 'react';
import HeaderIcon from './HeaderIcon';
import useraccountIcon from './img/useraccountIcon.svg';
import { usersContext } from '../../controllers/UsersStore';

const ProfileDropDown = () => {
  const [isUserAvaible, setIsUserAvaible] = useState(false);

  const { user } = useContext(usersContext);
  // useEffect(() => {
  //   // console.log(user.email);
  // }, []);

  // const userDetail = () => {
  //   setIsUserAvaible((prevIsUserAvaible) => !prevIsUserAvaible);
  // };
  const handleMouseEnter = () => {
    setIsUserAvaible(true);
  };

  const handleMouseLeave = () => {
    setIsUserAvaible(false);
  };
  const userExit = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      <div
        className='userprofile'
        // onClick={userDetail}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <HeaderIcon icon={useraccountIcon} alt='user-account-icon-svg' />
        {isUserAvaible && (
          <div className='current-user-details'>
            <p>Username : {user.username}</p>
            <p>Email Id : {user.email}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileDropDown;
