import React from 'react';
import './Footer.scss';

const Footer = props => {
  return (
    <footer className="footer">
          <div className="footer__logo-box">
            A bite of lifestyle and technology.
          </div>
          <div className="footer-row">
            <div className="footer-col-1-of-2">
              <div className="footer__navigation">
                <ul className="footer__navigation__list">
              <li className="footer__navigation__list__item">Made in India with <span role="img" aria-label="red heart">❤️ </span> by <a href="https://www.linkedin.com/in/warren-white-mark/" className="footer__navigation__list__item__link">Warren</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-col-1-of-2">
              <p className="footer__copyright">
                MegaBite<span style={{fontSize:'0.8rem'}}>&copy;</span>
              </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
