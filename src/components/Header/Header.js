import React from "react";
import "./Header.scss";
import logo from "../../images/logo.svg";
import search from "../../images/search.svg";
import profile from "../../images/icon-profile1.svg";
import down from "../../images/down.svg";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Daily langs" />
      <div className="header__menu">
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item header__nav-item_active">Курсы</li>
            <li className="header__nav-item">Статьи</li>
            <li className="header__nav-item">Вопросы</li>
          </ul>
        </nav>
        <button type="button" className="header__btn-search">
          <img className="header__img-search" src={search} alt="Лупа" />
        </button>
        <button type="button" className="header__btn-profile">
          <img className="header__img-profile" src={profile} alt="Профиль" />
        </button>
        <div className="header__lang-container">
          <a className="header__lang-link" href="#">
            RU
          </a>
          <img className="header__lang-img" src={down} alt="Стрелка вниз" />
        </div>
        <button className="header__burger-btn" type="button">
          <div className="header__burger">
            <span className="header__burger-line"></span>
            <span className="header__burger-line"></span>
            <span className="header__burger-line"></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;

// background: none;
// border: none;
