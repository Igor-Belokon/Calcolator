import React from "react";
import "../style.css";

import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import { regUser } from "../../store/action/data";

class Reg extends React.Component {
  state = {
    username: "",
    password: "",
    surname: "",
    name_customer: "",
    phone: "",
    email: "",
    role: "",
    password_confirmation: "",
    registered: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  userReg = () => {
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      phone: this.state.phone,
      surname: this.state.surname,
      name_customer: this.state.name_customer,
      role: this.state.role
    };
    this.props.regUser(user).then(() => this.setState({ registered: true }));
  };

  render() {
    const { registered } = this.state;

    if (registered) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="reg1">
        <div className="reg-form">
          <h1>Registration</h1>
          <div className="reg2">
            <label>Username</label>
            <label>Surname</label>
            <label>Name customer </label>
            <label>phone</label>
            <label>email</label>
            <label>role</label>
            <label>Password</label>
            <label>Password confirm</label>
          </div>
          <div className="reg2">
            <input
              type="username"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />

            <input
              type="surname"
              name="surname"
              placeholder="Surname"
              value={this.state.surname}
              onChange={this.handleChange}
            />

            <input
              type="name_customer"
              name="name_customer"
              placeholder="name_customer"
              value={this.state.name_customer}
              onChange={this.handleChange}
            />

            <input
              type="phone"
              name="phone"
              placeholder="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
            />

            <input
              type="role"
              name="role"
              placeholder="role"
              value={this.state.role}
              onChange={this.handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />

            <input
              type="password_confirmation"
              name="password_confirmation"
              placeholder="password_confirmation"
              value={this.state.password_confirmation}
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.userReg}>Registration</button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { regUser }
)(Reg);
