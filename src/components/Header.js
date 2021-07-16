import React from 'react';
import profile from '../images/marcel-gatete.png';
import PageTitle from './PageTitle';

const Header = () => {
  return (
    <div className="header">
      <TopLinks />
      <HeaderPhoto />
      
    </div>
  );
};
const TopLinks = () => {
  return (
    <nav className="top-links">
      <ul>
        <li>
          <a href="/about">about</a>
        </li>
        <li>
          <a href="#">blog</a>
        </li>
        <li>
          <a href="https://twitter.com/marcelgatete" target="_blank">
            twitter
          </a>
        </li>
        <li>
          <a href="https://t.me/dukodeRW" target="_blank">
            telegram
          </a>
        </li>
      </ul>
    </nav>
  );
};
const HeaderPhoto = () => {
  return (
    <div class="img-wrapper">
      <a href="/">
        <img class="my-portrait" src={profile} alt="marcel gatete" />
      </a>
    </div>
  );
};
export default Header;
