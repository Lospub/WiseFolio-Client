import WiseFolioLogo from '@/assets/icons/WiseFolio.svg?react';
import TwitterIcon from '@/assets/icons/twitter.svg?react';
import FacebookIcon from '@/assets/icons/facebook.svg?react';
import LinkedInIcon from '@/assets/icons/linkedin.svg?react';
import EmailIcon from '@/assets/icons/email.svg?react';
import PhoneIcon from '@/assets/icons/phone.svg?react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                
                {/* Logo Section */}
                <article className="footer__section">
                    <WiseFolioLogo className="footer__logo" />
                </article>

                {/* Contact Section */}
                <article className="footer__section">
                    <h4 className="footer__section-title">Contact</h4>
                    <p className="footer__contact-item">
                        <EmailIcon className="footer__icon" />
                        support@wisefolio.com
                    </p>
                    <p className="footer__contact-item">
                        <PhoneIcon className="footer__icon" />
                        +1 (555) 123-4567
                    </p>
                </article>

                {/* Social Media Section */}
                <article className="footer__section">
                    <h4 className="footer__section-title">Social</h4>
                    <div className="footer__social-icons">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon className="footer__icon" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon className="footer__icon" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon className="footer__icon" />
                        </a>
                    </div>
                </article>
            </div>
            <div className="footer__bottom">
                <p>&copy; 2025 WiseFolio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
