import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
// import { compose } from "recompose";

import "./loginpage.scss";
import axios from "axios";
import LoginPageImage from "../../img/Login/abstract-login-image.png";
import LoginPageText from "../../img/Login/logo-hipotrofia 1.png";

const LoginPage = () => (
  <div className="container loginpage">
    <div className="loginpage-form-container">
      <LoginFormBase />
    </div>
    <div className="loginpage-photo-container">
      <div className="background-image"  >
        <img className="text-image" src={LoginPageText} alt="login page text hipotrofia"></img>
      </div>
      
    </div>
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  errorEmail: "",
  errorPassword: "",
  isValid: false,
  error: null,
};

class LoginFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password, error } = this.state;

    //get z db potem funkcja z filter i dwie sciezki- do zalogowania i do bledu
    //LOGOWANIE ZA POMOCĄ FIREBASE-POSZUKAĆ HOOKÓW DO DATABASE- AXIOS
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:3001/users")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setUsersList(data);
        });
      // .catch(error((error)=>{
      //   this.setState({error})
      // }));
    }, []);

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
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
        errorPassword: "Password is invalid",
      });
    } else {
      this.setState({ errorPassword: "" });
      isPasswordValid = true;
    }
    return isPasswordValid;
  };

  render() {
    const { email, password, errorEmail, errorPassword, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div className="loginpage-form-container-form">
        <h1>Witamy...</h1>

        <div className="LoginBox">
          <form onSubmit={this.onSubmit}>
            <div className="email-container">
              <label>Email</label>
              <input
                name="email"
                value={email}
                onChange={this.onChange}
                onBlur={this.validateEmail}
                type="text"
                placeholder="e-mail"
              />
            </div>
            {errorEmail && <span className="errorMessage">{errorEmail}</span>}

            <div className="password-container">
              <label>Password</label>
              <input
                name="password"
                value={password}
                onChange={this.onChange}
                onBlur={this.validatePassword}
                type="password"
                placeholder="password"
              />
            </div>
            {errorPassword && (
              <span className="errorMessage">{errorPassword}</span>
            )}
          </form>
        </div>
        <div className="loginpage-buttons-container">
        <button disabled={isInvalid} type="submit" onClick={this.onSubmit}>
            Zaloguj się
          </button>
          <p>
            <Link to={"/register"}>Zarejestruj</Link>
          </p>

        </div>

        {error && <p className="errorMessage">{error.message}</p>}
      </div>
    );
  }
}

// const LoginForm = compose(withRouter)(LoginFormBase);

export default LoginPage;

//author: Karolina Skorupska
