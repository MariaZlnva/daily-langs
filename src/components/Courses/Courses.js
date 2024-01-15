import React from "react";
import "./Courses.scss";
import girl1 from "../../images/girl1.svg";
import girl2 from "../../images/girl2.svg";

const Courses = () => {
  return (
    <div className="courses">
      <div className="courses__title-container">
        <h1 className="courses__title">Курсы</h1>
        <div className="courses__title-bg">английского&nbsp;языка</div>
      </div>
      <div className="courses__content">
        <ul className="courses__list">
          <li className="courses__item">
            <div className="courses__item-box">
              <h3 className="courses__item-title">Английский шаг за шагом:</h3>
              <p className="courses__item-subtitle">Базовый уровень</p>
              <div className="courses__item-container">
                <p className="courses__item-name">
                  Полина Коваленко
                  <span className="courses__item-span-name"></span>
                </p>
                <div className="courses__price-container">
                  <p className="courses__price">2940₽</p>
                  <p className="courses__old-price">
                    6000₽
                    <span className="courses__percent">-51%</span>
                  </p>
                </div>
              </div>
              <div className="courses__item-link-wrap">
                <a className="courses__item-link">Подробнее</a>
                <span className="courses__item-arrow" />
              </div>
            </div>
            <img
              className="courses__item-img"
              src={girl1}
              alt="Фотография преподавателя"
            />
            <div className="courses__item-flag"></div>
            <div className="courses__item-az"></div>
          </li>

          <li className="courses__item">
            <div className="courses__item-box">
              <h3 className="courses__item-title">Английский шаг за шагом:</h3>
              <p className="courses__item-subtitle">Базовый уровень</p>
              <div className="courses__item-container">
                <p className="courses__item-name">
                  Полина Коваленко
                  <span className="courses__item-span-name"></span>
                </p>
                <div className="courses__price-container">
                  <p className="courses__price">2940₽</p>
                  <p className="courses__old-price">
                    6000₽
                    <span className="courses__percent">-51%</span>
                  </p>
                </div>
              </div>
              <div className="courses__item-link-wrap">
                <a className="courses__item-link">Подробнее</a>
                <span className="courses__item-arrow" />
              </div>
            </div>
            <img
              className="courses__item-img"
              src={girl1}
              alt="Фотография преподавателя"
            />
            <div className="courses__item-flag"></div>
            <div className="courses__item-az"></div>
          </li>
          <li className="courses__item">
            <div className="courses__item-box">
              <h3 className="courses__item-title">Английский шаг за шагом:</h3>
              <p className="courses__item-subtitle">Вводно-фонетический курс</p>
              <div className="courses__item-container">
                <p className="courses__item-name">
                  Полина Коваленко
                  <span className="courses__item-span-name"></span>
                </p>
                <div className="courses__price-container">
                  <p className="courses__price">2940₽</p>
                  <p className="courses__old-price">
                    6000₽
                    <span className="courses__percent">-51%</span>
                  </p>
                </div>
              </div>
              <div className="courses__item-link-wrap">
                <a className="courses__item-link">Подробнее</a>
                <span className="courses__item-arrow" />
              </div>
            </div>
            <img
              className="courses__item-img"
              src={girl2}
              alt="Фотография преподавателя"
            />
            <div className="courses__item-flag"></div>
            <div className="courses__item-ae"></div>
          </li>
          <li className="courses__item">
            <div className="courses__item-box">
              <h3 className="courses__item-title">Английский шаг за шагом:</h3>
              <p className="courses__item-subtitle">Вводно-фонетический курс</p>
              <div className="courses__item-container">
                <p className="courses__item-name">
                  Полина Коваленко
                  <span className="courses__item-span-name"></span>
                </p>
                <div className="courses__price-container">
                  <p className="courses__price">2940₽</p>
                  <p className="courses__old-price">
                    6000₽
                    <span className="courses__percent">-51%</span>
                  </p>
                </div>
              </div>
              <div className="courses__item-link-wrap">
                <a className="courses__item-link">Подробнее</a>
                <span className="courses__item-arrow" />
              </div>
            </div>
            <img
              className="courses__item-img"
              src={girl2}
              alt="Фотография преподавателя"
            />
            <div className="courses__item-flag"></div>
            <div className="courses__item-ae"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Courses;
