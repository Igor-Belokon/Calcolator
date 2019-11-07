import React from "react";
import "./style.css";

export default class Message extends React.Component {
  render() {
    return (
      <div className="message">
        <div>
          <h4>Дизайн сайта UI и UX</h4>
          <p>
            Рекламные компании говорят, что реклама необходима и важна. Она
            информирует
            <br /> людей о новых продуктах. Рекламные щиты на улицах делают нашу
            среду яркой.
          </p>
          <p>#lending-page #Логотип #Промо-сайт</p>
        </div>
        <div>
          <h4>1 800$</h4>
          <p>1-2 месяца</p>
        </div>
      </div>
    );
  }
}
