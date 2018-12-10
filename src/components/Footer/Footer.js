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
                  <li className="footer__navigation__list__item"><a href="/" className="footer__navigation__list__item__link">Instagram</a></li>
                  <li className="footer__navigation__list__item"><a href="/" className="footer__navigation__list__item__link">Facebook</a></li>
                  <li className="footer__navigation__list__item"><a href="/" className="footer__navigation__list__item__link">Twitter</a></li>
                  <li className="footer__navigation__list__item"><a href="/" className="footer__navigation__list__item__link">More</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-col-1-of-2">
              <p className="footer__copyright">
                MegaByte&copy;
              </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
