import React from "react";
import "./style.css";
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
          <div>Exprts</div>
          <input placeholder="Search"></input>
          <div>Експерты</div>
          <div>Вопросы</div>
          <div>О нас</div>
          <div>Создать проект</div>
          <div>
            <button onClick={this.onProf}></button>
          </div>
        </div>
        <div className="filter-found">
          <div className="filter">
            <div className="head">
              <h5>Фильтры</h5>
              <h5>Очистить</h5>
            </div>
            <div>
              <h6>Категории</h6>
              <div className="head">
                <input></input>
                <p>+</p>
              </div>
              <div>#Логотип</div>
              <div>#lending-page</div>
              <div>#Промо-сайт</div>
              <div>✖</div>
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
