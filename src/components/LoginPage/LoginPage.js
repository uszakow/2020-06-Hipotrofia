import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

import "./loginpage.scss";

import LoginPageImage from "../../img/Login/abstract-login-image.png";
import LoginPageText from "../../img/Login/logo-hipotrofia 1.png";

/* const LoginPage = ({ user, loginUser, logoutUser }) => (
  <div className="container loginpage">
    <div className="loginpage-form-container">
      <LoginFormBase
        user={user}
        loginUser={loginUser}
        logoutUser={logoutUser}
      />
    </div>
    <div className="loginpage-photo-container">
      <div className="background-image">
        <img
          className="text-image"
          src={LoginPageText}
          alt="login page text hipotrofia"
        ></img>
      </div>
    </div>
  </div>
); */

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {...props };
  }
  
  onSubmit = (event) => {
    
    event.preventDefault();
    
  };

  onClick = () => {
    const userDto = {
      token: "",
      name: "",
      email: document.getElementById("email").value,
      roleName: "",
    };

    this.state.loginUser(userDto);
  };

  onChange = (event) => {

    // this.setState({ [event.target.name]: event.target.value });
  };

  validateEmail = () => {
    const { email } = this.state;
    let isEmailValid = true;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      isEmailValid = false;
      this.setState({ errorEmail: "Podany email jest nieprawidłowy!" });
    } else {
      this.setState({ errorEmail: "" });
      isEmailValid = true;
    }
    return isEmailValid;
  };
  validatePassword = () => {
    const { password } = this.state;
    let isPasswordValid = true;

    if (password === "" || password.length <= 6) {
      isPasswordValid = false;
      this.setState({
        errorPassword: "Hasło jest błędne",
      });
    } else {
      this.setState({ errorPassword: "" });
      isPasswordValid = true;
    }
    return isPasswordValid;
  };

  render() {
    // const { email, password, errorEmail, errorPassword, error } = this.state;

    // const isInvalid = password === "" || email === "";

    console.log(this.props);

    return (
      <div className="container loginpage">
        <div className="loginpage-form-container">
          <div className="loginpage-form-container-form">
            <h1>Witamy...</h1>

            <div className="LoginBox">
              <form onSubmit={this.onSubmit}>
                <div className="email-container">
                  <label>Email</label>
                  <input
                    id="email"
                    name="email"
                    // value={email}
                    onChange={this.onChange}
                    // onBlur={this.validateEmail}
                    type="text"
                    placeholder="imię@email.com"
                  />
                </div>
                {/* {errorEmail && <span className="errorMessage">{errorEmail}</span>} */}

                <div className="password-container">
                  <label>Password</label>
                  <input
                    id="password"
                    name="password"
                    // value={password}
                    onChange={this.onChange}
                    onBlur={this.validatePassword}
                    type="password"
                    placeholder="Hasło"
                  />
                </div>
                {/* {errorPassword && (
              <span className="errorMessage">{errorPassword}</span>
            )} */}
              </form>
            </div>
            <div className="loginpage-buttons-container">
              {this.state.user.email === "" ? (
                <button
                  className="login-button"
                  type="submit"
                  onClick={this.onClick}
                >
                  Zaloguj
                </button>
              ) : (
                <button
                  className="logout-button"
                  onClick={this.state.logoutUser}
                >
                  Wyloguj
                </button>
              )}

              <p className="register-button">
                <Link to={"/register"}>Zarejestruj</Link>
              </p>
              <p className="forget-password">
                <Link to={"/"}>Zapomniałeś hasła?</Link>
              </p>
            </div>
            {/* {error && <p className="errorMessage">{error.message}</p>} */}
          </div>
        </div>
        <div className="loginpage-photo-container">
          <div className="background-image">
            <img
              className="text-image"
              src={LoginPageText}
              alt="login page text hipotrofia"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

/// komponent funkcyjny

export default LoginPage;

//author: Karolina Skorupska
