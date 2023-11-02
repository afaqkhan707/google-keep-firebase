import hamburgerIcon from '../atoms/img/hamburgerIcon.svg';
import HeaderIcon from '../atoms/HeaderIcon';
import './LeftNav.css';
import Logo from '../atoms/Logo';

const LeftNav = () => {
  return (
    <>
      <div className='LeftSideBar'>
        <HeaderIcon
          icon={hamburgerIcon}
          title='Main Menu'
          alt='hamburger-icon-svg'
        />
        <Logo />
        <h3>Keep</h3>
      </div>
    </>
  );
};

export default LeftNav;
