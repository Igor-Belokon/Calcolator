import React from "react";

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
    this.props.regUser(user);
    this.setState({ registered: true });
  };

  render() {
    const { registered } = this.state;

    if (registered) {
      return <Redirect to="/login" />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up For An Account</h1>

        <label>Username</label>
        <input
          type="username"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />

        <label>Surname</label>
        <input
          type="surname"
          name="surname"
          placeholder="Surname"
          value={this.state.surname}
          onChange={this.handleChange}
        />
        <br />

        <label>Name customer </label>
        <input
          type="name_customer"
          name="name_customer"
          placeholder="name_customer"
          value={this.state.name_customer}
          onChange={this.handleChange}
        />
        <br />
        <label>phone</label>
        <input
          type="phone"
          name="phone"
          placeholder="phone"
          value={this.state.phone}
          onChange={this.handleChange}
        />
        <br />

        <label>email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br />
        <label>role</label>
        <input
          type="role"
          name="role"
          placeholder="role"
          value={this.state.role}
          onChange={this.handleChange}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <label>password_confirmation</label>
        <input
          type="password_confirmation"
          name="password_confirmation"
          placeholder="password_confirmation"
          value={this.state.password_confirmation}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.userReg}></button>
      </form>
    );
  }
}

export default connect(
  null,
  { regUser }
)(Reg);
