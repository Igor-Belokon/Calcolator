import React from "react";
import "../style.css";
import Message from "./massage";

import { Redirect } from "react-router-dom";
import Price from "./price";
export default class MainForm extends React.Component {
  state = {
    edited: false
  };
  onProf = () => {
    this.setState({ edited: true });
  };
  render() {
    const { edited } = this.state;

    if (edited) {
      return <Redirect to="/protected" />;
    }

    return (
      <div>
        <div className="flex-container">
          <div className="header header-text">Exprts</div>
          <input placeholder="Search" className="find "></input>
          <div className="header">Експерты</div>
          <div className="header">Вопросы</div>
          <div className="header">О нас</div>
          <div className="header header-text1">Создать проект</div>
          <div>
            <button className="header" onClick={this.onProf}>
              )(
            </button>
          </div>
        </div>
        <div className="filter-found">
          <div className="filter">
            <div className="head">
              <h6>Фильтры</h6>
              <h6>Очистить</h6>
            </div>
            <div>
              <h6>Категории</h6>
              <div className="head filter-search ">
                <input placeholder="Search" className="find2 "></input>
                <p>+</p>
              </div>
              <div className="head">
                <div className="filter-content">#Логотип</div>
                <div className="filter-content">#lending-page</div>
              </div>
              <div className="head">
                <div className="filter-content">#Промо-сайт</div>
                <div className="filter-content">✖</div>
              </div>
            </div>
            <div>
              <h6>Стоимость</h6>
              <div></div>
            </div>
          </div>
          <div className="found">
            <div className="search">
              <h5>Найдено</h5> <h5>(192 Услуги)</h5>
            </div>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
          </div>
        </div>
      </div>
    );
  }
}
