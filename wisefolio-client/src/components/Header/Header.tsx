import { Link, useLocation } from 'react-router-dom';
import DashboardIcon from '@/assets/icons/dashboard.svg?react';
import HomeIcon from '@/assets/icons/home.svg?react';
import BellIcon from '@/assets/icons/bell.svg?react';
import UserAvatar from '@/assets/icons/img.svg?react';
import WiseFolioLogo from '@/assets/icons/WiseFolio.svg?react';
import './Header.scss';

const Header = () => {
    const location = useLocation();

    // Determine the header type
    const isHomePage = location.pathname === '/';
    const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
    const isOtherPage = !isHomePage && !isAuthPage;

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
                        <UserAvatar className="header__icon header__icon--avatar" />
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
