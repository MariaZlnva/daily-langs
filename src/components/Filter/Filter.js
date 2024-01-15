import React from "react";
import "./Filter.scss";
import whiteArrow from "../../images/down-white.svg";
import filterIcon from "../../images/filter.svg";

const Filter = () => {
  return (
    <div className="filter">
      <button className="filter__btn" type="button">
        Язык
        <img
          className="filter__btn-img"
          src={whiteArrow}
          alt="Белая стрелка вниз"
        />
      </button>

      <div className="filter__content">
        <div className="filter__item">
          <h4 className="filter__title">Продолжительность</h4>
          <label for="period" className="filter__label">
            От 1 до 6 мес.
            <input
              className="filter__input-range"
              type="range"
              id="period"
              name="period"
              step="1"
              min="1"
              max="6"
              defaultValue="0"
            ></input>
          </label>
        </div>

        <div className="filter__item">
          <h4 className="filter__title">Сложность</h4>
          <div className="filter__wrap">
            <label className="filter__label">
              <input
                className="filter__input-radio"
                type="radio"
                name="level"
                value="all"
                // checked
              />
              <p className="filter__subtitle">Для всех</p>
            </label>
            <label className="filter__label">
              <input
                className="filter__input-radio"
                type="radio"
                name="level"
                value="begginer"
              />
              <p className="filter__subtitle">Для начинающих</p>
            </label>
            <label className="filter__label">
              <input
                className="filter__input-radio"
                type="radio"
                name="level"
                value="advanced"
              />
              <p className="filter__subtitle">Продвинутый уровень</p>
            </label>
          </div>
        </div>

        <div className="filter__item">
          <h4 className="filter__title">Навыки</h4>
          <div className="filter__wrap">
            <label className="filter__label">
              <input
                className="filter__input-checkbox"
                type="checkbox"
                name="grammar"
              />
              <p className="filter__subtitle-checkbox">Грамматика</p>
            </label>
            <label className="filter__label">
              <input
                className="filter__input-checkbox"
                type="checkbox"
                name="lexis"
              />
              <p className="filter__subtitle-checkbox">Лексика</p>
            </label>
            <label className="filter__label">
              <input
                className="filter__input-checkbox"
                type="checkbox"
                name="syntax"
              />
              <p className="filter__subtitle-checkbox">Синтаксис</p>
            </label>
            <label className="filter__label">
              <input
                className="filter__input-checkbox"
                type="checkbox"
                name="phonetics"
              />
              <p className="filter__subtitle-checkbox">Фонетика</p>
            </label>
            <label className="filter__label">
              <input
                className="filter__input-checkbox"
                type="checkbox"
                name="punctuation"
              />
              <p className="filter__subtitle-checkbox">Пунктуация</p>
            </label>
          </div>
        </div>
      </div>
      <button className="filter__btn-filter" type="button">
        <img src={filterIcon} alt="Круг с бегунками" />
      </button>
    </div>
  );
};
export default Filter;
