import React from "react";
import "../style.css";

export default class Price extends React.Component {
  render() {
    return (
      <div className="price-bar">
        <div className="range-filter">
          <div className="range-controls">
            <div className="scale">
              <div className="bar"></div>
            </div>
            <div className="toggle min-toggle"></div>
            <div className="toggle max-toggle"></div>
          </div>
          <div className="price-controls">
            от <input className="min-price" type="text" value="5 000" />
            до <input className="max-price" type="text" value="15 000" />
          </div>
        </div>
        ;
      </div>
    );
  }
}
