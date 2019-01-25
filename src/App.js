import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { SimpleInput } from "./components/Inputs/SimpleInput";
import SimpleButton from "./components/Buttons/SimpleButton";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false
    };
  }
  onChangeText(key, e) {
    this.setState({
      [key]: e.target.value
    });
  }
  render() {
    return (
      <div className="container">
        <SimpleInput
          label="Email"
          type="email"
          value={this.state.email}
          onChange={e => this.onChangeText("email", e)}
        />
        <SimpleInput
          label="Password"
          type="password"
          value={this.state.password}
          onChange={e => this.onChangeText("password", e)}
        />
        {this.state.isLoading ? (
          <SimpleButton title="Loading..." />
        ) : (
          <SimpleButton title="Login" onClick={() => this.loginUser()} />
        )}
      </div>
    );
  }
  loginUser() {
    const { email, password } = this.state;
    if (!email || !password) {
      alert(`Email or password can't be empty`);
      return;
    }
    this.setState({
      isLoading: true
    });
    axios
      .post("https://andela-sendit-api.herokuapp.com/api/v1/auth/login", {
        email,
        password
      })
      .then(async response => {
        const { token } = response.data;
        await localStorage.setItem("token", token);
        this.setState({
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
