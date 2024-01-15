import React from "react";
import "./Footer.scss";
import logo from "../../images/logo-white.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a className="footer__link">Политика конфиденциальности</a>
        <a className="footer__link">Условия пользования</a>
      </div>
      <img className="footer__logo" src={logo} alt="Логотип Daily langs" />
      <div className="footer__copyright">
        © DailyLangs | 2023. Все права защищены
      </div>
    </footer>
  );
};

export default Footer;
