import React from "react";
import { connect } from "react-redux";

import { editUser } from "../../store/action/data";

import store from "../../store";

export class Edit extends React.Component {
  state = {
    username: store.getState().data.username,

    surname: store.getState().data.surname,
    name_customer: store.getState().data.surname,

    role: store.getState().data.surname
  };
  editChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  userEdit = () => {
    const user = {
      username: this.state.username,

      surname: this.state.surname,
      name_customer: this.state.name_customer,
      role: this.state.role
    };
    this.props.editUser(user);
  };

  render() {
    return (
      <div>
        <label>Username</label>
        <input
          type="username"
          name="username"
          placeholder={this.state.username}
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />

        <label>Surname</label>
        <input
          type="surname"
          name="surname"
          placeholder={this.state.surname}
          value={this.state.surname}
          onChange={this.handleChange}
        />
        <br />

        <label>Name customer </label>
        <input
          type="name_customer"
          name="name_customer"
          placeholder={this.state.name_customer}
          value={this.state.name_customer}
          onChange={this.handleChange}
        />
        <br />
        <label>role</label>
        <input
          type="role"
          name="role"
          placeholder={this.state.role}
          value={this.state.role}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.userEdit}></button>
      </div>
    );
  }
}
export default connect(
  null,
  { editUser }
)(Edit);
//
