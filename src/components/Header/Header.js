import React, { useState} from 'react';
import classNames from 'classnames';
import logo from '../../images/logo.svg';
import icon from '../../images/menu-icon.svg';
import { list } from '../../menuList';
import { mobileList } from '../../menuList';

import './Header.scss';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
  <header className="header">
    <div className="header__body">
      <a href="#" className={classNames("header__logo", {"header__logo--disable": isActive})}>
        <img src={logo} alt="logo" className="header__logo-img"/>
      </a>
      <nav className="header__nav">
          <ul className="header__list">
            {list.map(item => (
              <li key={item} className="header__nav-item">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>

          <div className={classNames("header__menu-container", {"header__menu-container--active": isActive})}>
            <div className={classNames("header__menu-nav", {"header__menu-nav--active": isActive})}>
              <div className="header__logo-wrapper">
                <a 
                  href="#" 
                  className={classNames("header__logo", {"header__logo--active": isActive})}
                  onClick={() => setIsActive(false)}
                >
                  <img src={logo} alt="logo" className="header__logo-img"/>
                </a>
              </div>
              <ul className="header__menu-list">
                {mobileList.map(item => (
                  <li
                    key={item}
                    className="header__menu-item"
                  >
                    <a 
                      href="#" 
                      className="header__menu-link"
                      onClick={() => setIsActive(false)}
                    >
                      {item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="header__menu-mask"></div>
          </div>
      </nav>

      <button 
        type="button" 
        className="header__menu-button"
        onClick={() => setIsActive(!isActive)}
      >
        <img 
          src={icon} 
          alt="button" 
          className="header__menu-icon"
        />
      </button>
    </div>
  </header>
  )
}
