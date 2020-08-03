import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";

const RegisterPage = () => (
    <div className="SignUp">
      <h1>Załóż konto</h1>
     
      <RegisterForm />
    </div>
  );


  const INITIAL_STATE = {
    // username: "",
    email: "",
    password: "",
    password2: "",
    error: null,
    errorEmail: "",
    errorPassword: "",
    errorPassword2: "",
  };

  class RegisterFormBase extends Component {

    constructor(props) {
        super(props);
    
        this.state = { ...INITIAL_STATE };
      }

      onSubmit = (event) => {
        const { email, password, password2 } = this.state;
        //tu zmiana na axios
        this.props.database
          .doCreateUserWithEmailAndPassword(email, password, password2)
          .then((authUser) => {
            //create a user in realtime Firebase database
            return this.props.firebase.user(authUser.user.uid).set({
              
              email,
            });
          })
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push("/");
          })
          .catch((error) => {
            this.setState({
              error,
            });
          });
        event.preventDefault();
      };
    
      onChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };

      render(){
          const {email, password, password2, errorEmail, errorPassword, errorPassword2, error} = this.state;

          const isInvalid =
      password !== password2 ||
      password === "" ||
      email === "" ;
      
      

      return(
        <div>
            <form onSubmit={this.onSubmit} className="RegisterBox">
            <div className="Email">
                <label>Email</label>
                <input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="email"
                />
          </div>
          {errorEmail && <span className="errorMessage">{errorEmail}</span>}

          <div className="Password">
            <label>Hasło</label>
            <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="password"
            />
          </div>
          {errorPassword && (
            <span className="errorMessage">{errorPassword}</span>
          )}

<div className="Password2">
            <label>Powtórz hasło</label>
            <input
              name="password2"
              value={password2}
              onChange={this.onChange}
              type="password"
              placeholder="confirm password"
            />
          </div>
          {errorPassword2 && (
            <span className="errorMessage">{errorPassword2}</span>
          )}


            </form>
            <div className="buttonFrame">
        <p><Link to={"/login"}>Zaloguj się</Link></p>
        <button disabled={isInvalid} type="submit" onClick={this.onSubmit}>
          Zarejestruj
        </button>
        </div>
        {error && <p>{error.message}</p>}
        </div>
      )

  };
};

const RegisterForm = compose(withRouter)(RegisterFormBase);

const RegisterLink = () => <Link to={"/register"}> Zarejestruj </Link>;

export default RegisterPage;

export { RegisterForm, RegisterLink };

// made by Karolina Skorupska
