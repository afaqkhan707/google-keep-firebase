import hamburgerIcon from '../atoms/img/hamburgerIcon.svg';
import HeaderIcon from '../atoms/HeaderIcon';
// import Link from 'next/link';
import './LeftSideBar.css';
import Logo from '../atoms/Logo';

const LeftSideBar = () => {
  return (
    <>
      <div className='LeftSideBar'>
        <HeaderIcon
          icon={hamburgerIcon}
          title='Main Menu'
          alt='hamburger-icon-svg'
        />
        <Logo til='keep' />
        <h3>Keep</h3>
      </div>
    </>
  );
};

export default LeftSideBar;
