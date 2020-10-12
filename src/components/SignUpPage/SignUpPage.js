import React, { Component } from "react";
import "./signUpPage.scss";
import { Link } from "react-router-dom";
import LoginPageText from "../../img/Login/logo-hipotrofia 1.png";

class SignUpPage extends Component{
    constructor(props){
        super(props);
        this.state={...props,
        email:"",
        errorEmail:"",
        password:"",
        errorPassword:"",
        error:null,
        isInvalid:false,
        secondPassword:""
        };
    }

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
        const { password, secondPassword } = this.state;
        let isPasswordValid = true;
    
        if (password === "" || password.length <= 6 || password === secondPassword) {
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
    
    render(){

        const { email, password, errorEmail, errorPassword, error } = this.state;

        const isInvalid = password === "" || email === "";

        return(
            <div className="container signup-page">
        <div className="signup-form-container">
          <div className="signup-form-container-form">
            
              <h1>Witamy...</h1>

            
              <div className="signup-box">
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
                  <div className="password-container">
                    <label>Powtórz Hasło</label>
                    <input
                      id="secondPassword"
                      name="secondPassword"
                      // value={password}
                      onChange={this.onChange}
                    //   onBlur={this.validatePassword}
                      type="password"
                      placeholder="powtórz Hasło"
                    />
                  </div>
                  {/* {errorPassword && (
                        <span className="errorMessage">{errorPassword}</span>
                      )} */}
                </form>
              </div>

            <div className="signup-page-buttons-container">
              
                <>
                  <button
                    className="signup-button"
                    type="submit"
                    onClick={this.onClick}
                  >
                    Zarejestruj
                  </button>

                  <p className="login-button">
                    <Link to={"/login"}>Zaloguj</Link>
                  </p>

                </>
             
           
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
        )
    }
}

export default SignUpPage;

//author:Karolina Skorupska

