import React from "react";
import { connect } from "react-redux";

import { loginUser } from "../../store/action/data";

export class login extends React.Component {
  state = {
    email: "",
    password: ""
  };
  loginChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  userLogin = () => {
    const user = {
      email: this.props.email,
      password: this.props.password
    };
    this.props.loginUser(user);
  };

  render() {
    return (
      <div>
        <label>Username</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.loginChange}
        />
        <br />
        <label>password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.loginChange}
        />
        <br />
        <button onClick={this.userLogin}></button>
      </div>
    );
  }
}
export default connect(
  null,
  { loginUser }
)(login);
//
