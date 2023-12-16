import React, { useContext, useEffect, useState } from 'react';
import HeaderIcon from './HeaderIcon';
import useraccountIcon from './img/useraccountIcon.svg';
import { usersContext } from '../../controllers/UsersStore';

const ProfileDropDown = () => {
  const { user } = useContext(usersContext);
  const [isLogged, setIsLogged] = useState(false);

  const userCard = () => {
    setIsLogged(!isLogged);
  };

  return (
    <>
      <div className='userprofile' onClick={userCard}>
        <HeaderIcon icon={useraccountIcon} alt='user-account-icon-svg' />
        {isLogged && (
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
