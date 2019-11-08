import React from "react";
import { connect } from "react-redux";

import "../style.css";

import { loginUser } from "../../store/action/data";
import { Redirect } from "react-router-dom";

export class login extends React.Component {
  state = {
    email: "",
    password: "",
    logined: false,
    registed: false
  };
  loginChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  userLogin = () => {
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user).then(data => this.setState({ logined: true }));
  };
  userRegis = () => {
    this.setState({ registed: true });
  };

  render() {
    const { logined } = this.state;
    const { registed } = this.state;

    if (logined) {
      return <Redirect to="/public" />;
    }
    if (registed) {
      return <Redirect to="/reg" />;
    }

    return (
      <div className="reg1">
        <div className="reg-form">
          <div className="reg2">
            <label>Username</label>
            <label>password</label>
          </div>
          <div className="reg2">
            <input
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.loginChange}
            />

            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.loginChange}
            />
          </div>
          <button onClick={this.userLogin}>Login</button>
          <button onClick={this.userRegis}>Registration</button>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { loginUser }
)(login);
//
