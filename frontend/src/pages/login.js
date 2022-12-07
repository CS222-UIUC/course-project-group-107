import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "../App.css";
import "./login.css";
import illinilogo2crop from "./illinilogo2crop.png";
import axios from "axios"

//import isvalidpass from "./backend/logincheck.py"

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: true
      }
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.email.value);
    
        if (!e.target.email.value) {
          alert("Email is required");
        } else if (!e.target.email.value) {
          alert("Valid email is required");
        } else if (!e.target.password.value) {
          alert("Password is required");
        } else if (e.target.password.value && e.target.email.value) {
          //correctinput = isvalidpass(e.target.email.value, e.target.password.value);
          const article = { username: e.target.email.value, password:e.target.password.value };
          console.log(article);
            axios.post('http://127.0.0.1:8000/accounts/api/user/login/', article, {
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then(response => console.log(response.data)).catch((error) => console.log( error.response.request._response ) );
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
            <div className="login">
                <img src={illinilogo2crop} className="illinilogo2crop" alt="Illinois" />
                <form className="form" onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="NetID@illinois.edu" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="*********" />
                </div>
                <button className="primary">LOGIN</button>
                </form>
                <Link to="/register">
                <button className="secondary">
                CREATE A NEW ACCOUNT
                </button>
                </Link>
            </div>
        )
        
    }
}
 
export default Login;