import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./loginpage.scss";
import LoginPageText from "../../img/Login/logo-hipotrofia 1.png";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      email: "",
      errorEmail: "",
      password: "",
      errorPassword: "",
      error:null,
      isInvalid:false
    };
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
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
    const { email, password, errorEmail, errorPassword, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div className="container loginpage">
        <div className="loginpage-form-container">
          <div className="loginpage-form-container-form">
            {this.props.user.email === "" ? (
              <h1>Witamy...</h1>
            ) : (
              <h1>Witamy {this.props.user.email}</h1>
            )}

            {this.props.user.email === "" && (
              <div className="LoginBox">
                <form onSubmit={this.onSubmit}>
                  <div className="email-container">
                    <label>Email</label>
                    <input
                      id="email"
                      name="email"
                      // value={email}
                      onChange={this.onChange}
                      onBlur={this.validateEmail}
                      type="text"
                      placeholder="imię@email.com"
                    />
                  </div>
                  {errorEmail && <span className="errorMessage">{errorEmail}</span>}

                  <div className="password-container">
                    <label>Hasło</label>
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
            )}

            <div className="loginpage-buttons-container">
              {this.props.user.email === "" ? (
                <>
                  <button
                    className="login-button"
                    type="submit"
                    onClick={this.onClick}
                  >
                    Zaloguj
                  </button>

                  <p className="register-button">
                    <Link to={"/signup"}>Zarejestruj</Link>
                  </p>
                  <p className="forget-password">
                    <Link to={"/"}>Zapomniałeś hasła?</Link>
                  </p>
                </>
              ) : (
                <button
                  className="logout-button"
                  onClick={this.state.logoutUser}
                >
                  Wyloguj
                </button>
              )}
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



export default LoginPage;

//author: Karolina Skorupska
