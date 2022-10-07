import React, { Component } from "react";
import "./App.css";

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.email.value === "apples@apples.com" &&
      e.target.password.value === "apples"
    ) {
      alert("Successfully logged in");
      e.target.email.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong email or password combination");
    }
  };

  handleClick = e => {
    e.preventDefault();

    alert("Goes to registration page");
  };

  render() {
    return (
      <div className="App">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="name@email.com" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button className="primary">LOGIN</button>
        </form>
        <button className="secondary" onClick={this.handleClick}>
          Create a new account
        </button>
      </div>
    );
  }
}

export default App;