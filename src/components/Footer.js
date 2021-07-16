import React from 'react';
import WebIcon from '../images/web-email-icon.svg';
import AddressIcon from '../images/address-icon.svg';
import PhoneIcon from '../images/phone-icon.svg';

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container">
        <div className="footer-col">
          <div className="footer-icon">
            <img src={PhoneIcon} alt="" />
          </div>
          <div className="footer-info">
            <a href="tel:0734048123">+250 734048123</a>
            <br />
            <a href="tel:0789759638">+250 789759638</a>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-icon">
            <img src={WebIcon} alt="" />
          </div>
          <div className="footer-info">
            <a href="mailto:gatetecodes@gmail.com">gatetecodes@gmail.com</a>
            <br />
            <a href="https://www.marcelgatete.com">www.marcelgatete.com</a>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-icon">
            <img src={AddressIcon} alt="" />
          </div>
          <div className="footer-info">
            <p>KN 2 Avenue</p>
            <p>Nyarugenge, Kigali, Rwanda</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
