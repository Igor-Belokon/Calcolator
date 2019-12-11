import React from "react";
import "../style.css";

import { connect } from "react-redux";

import {
  getAnswers,
  sumOp,
  divideOp,
  remainderOp,
  highestOp
} from "../../store/action/data";

import { getAnswer } from "../../store/selectors/selectors";

class Calculator extends React.Component {
  state = {
    first: 0,
    second: 0,
    ans: []
  };

  answer = () => {
    this.props.getAnswers(this.state.ans);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  sum = () => {
    this.setState({
      ans: +this.state.first + +this.state.second
    });
  };
  divide = () => {
    this.setState({
      ans: +this.state.first / +this.state.second
    });
  };
  remainder = () => {
    this.setState({
      ans: +this.state.first % +this.state.second
    });
  };
  highest = () => {
    let n = this.state.second;
    let z = [];
    nextPrime: for (let i = this.state.first; i <= n; i++) {
      for (let j = this.state.first; j < i; j++) {
        if (i % j === 0) continue nextPrime;
      }

      z[i] = i;
    }
    this.setState({
      ans: z
    });
  };

  render() {
    return (
      <div className="reg1">
        <div className="reg-form">
          <h1>Calculator</h1>
          <div className="reg2">
            <label>First operand</label>
            <label>Second operand</label>
          </div>
          <div className="reg2">
            <input
              type="first"
              name="first"
              placeholder="first"
              value={this.state.first}
              onChange={this.handleChange}
            />

            <input
              type="second"
              name="second"
              placeholder="second"
              value={this.state.second}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button onClick={this.sum}>+</button>
            <button onClick={this.divide}>/</button>
            <button onClick={this.remainder}>%</button>
            <button onClick={this.highest}>
              Highest prime number between A and B if available
            </button>
          </div>
          <button onClick={this.answer}>Calculator</button>
        </div>
        <div className="sameData">Answer history {this.props.answers} </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { answers: getAnswer(state) };
}
export default connect(mapStateToProps, {
  getAnswers,
  sumOp,
  divideOp,
  remainderOp,
  highestOp
})(Calculator);
