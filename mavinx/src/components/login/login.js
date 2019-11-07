import React from "react";
import { connect } from "react-redux";

import { loginUser } from "../../store/action/data";
import { Redirect } from "react-router-dom";

export class login extends React.Component {
  state = {
    email: "",
    password: "",
    logined: false
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

  render() {
    const { logined } = this.state;

    if (logined) {
      return <Redirect to="/public" />;
    }

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
