import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DashboardIcon from '@/assets/icons/dashboard.svg?react';
import HomeIcon from '@/assets/icons/home.svg?react';
import BellIcon from '@/assets/icons/bell.svg?react';
import UserAvatar from '@/assets/icons/img.svg?react';
import ProfileIcon from '@/assets/icons/profile.svg?react';
import LogoutIcon from '@/assets/icons/logout.svg?react';
import WiseFolioLogo from '@/assets/icons/WiseFolio.svg?react';
import './Header.scss';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Determine the header type
  const isHomePage = location.pathname === '/';
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isOtherPage = !isHomePage && !isAuthPage;

  // Navigate to profile page on mobile, or toggle dropdown for tablet and desktop
  const handleAvatarClick = () => {
    if (window.innerWidth < 768) {
      navigate('/profile');
    } else {
      setDropdownOpen(!dropdownOpen);
    }
  };

  // handle the logout
  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <header className="header">

      {/* Display Logo */}
      <div className="header__logo">
        <Link to="/">
          <WiseFolioLogo className="header__logo-icon" />
        </Link>
      </div>

      {/* Display Navigation */}
      <nav className="header__nav">

        {isHomePage && (
          // Link to the dashboard when on the home page
          <Link to="/dashboard" className="header__link">
            <span className="header__text">Dashboard</span>
            <DashboardIcon className="header__icon header__icon--mobile" />
          </Link>
        )}

        {isAuthPage && (
          // Link to the home page when on an auth page
          <Link to="/" className="header__link">
            <span className="header__text">Home</span>
            <HomeIcon className="header__icon header__icon--mobile" />
          </Link>
        )}

        {isOtherPage && (
          // Display user icons when on other pages
          <div className="header__icons">
            <BellIcon className="header__icon header__icon--bell" />
            
            {/* Avatar Dropdown List */}
            <div className="header__avatar-wrapper" onClick={handleAvatarClick}>
              <UserAvatar className="header__icon header__icon--avatar" />
              {dropdownOpen && (
                <section className="header__dropdown">
                  <Link to="/profile" className="header__dropdown-item">
                    <ProfileIcon className="header__dropdown-icon" />
                    Profile Settings
                  </Link>
                  <Link
                    to="/"
                    className="header__dropdown-item header__dropdown-item--logout"
                    onClick={handleLogout}
                  >
                    <LogoutIcon className="header__dropdown-icon" />
                    Logout
                  </Link>
                </section>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
