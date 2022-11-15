import React, { Component } from 'react';
import "../App.css";
import illinilogo2crop from "./illinilogo2crop.png";
import axios from "axios"

class Login extends Component {
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
          const article = { username: e.target.email.value, password:e.target.password.value };
          console.log(article);
            axios.post('http://127.0.0.1:8000/accounts/api/user/', article, {
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
            <div className="App">
                <img src={illinilogo2crop} className="illinilogo2crop" alt="Illinois" />
                <form className="form" onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="name@email.com" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="*********" />
                </div>
                <button className="primary">LOGIN</button>
                </form>
                <button className="secondary" onClick={this.handleClick}>
                CREATE A NEW ACCOUNT
                </button>
            </div>
        )
        
    }
}
 
export default Login;