import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from "recompose";

 
const LoginPage = () => (
    <div>
        <LoginForm />
    </div>
);

const INITIAL_STATE = {
    email:'',
    password:'',
    errorEmail:'',
    errorPassword:'',
    isValid:false,
    error:null
}

class LoginFormBase extends Component {
    constructor(props){
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit=(event)=>{

        const {email, password } = this.state;
        //LOGOWANIE ZA POMOCĄ FIREBASE-POSZUKAĆ HOOKÓW DO DATABASE- AXIOS
        this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(()=>{
            this.setState({...INITIAL_STATE});
            this.props.history.push("/");
        })
        .catch((error)=>{
            this.setState({error})
        });

        event.preventDefault();
    }

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

      render(){
          const {email, password, errorEmail, errorPassword, error } = this.state;
        
          const isInvalid = password === "" || email === "";

          return(

            <div className="SignIn">
        <h1>Zaloguj się</h1>
        
        <div className="LoginBox">
          <form onSubmit={this.onSubmit}>
            <div className="Email">
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

            <div className="Password">
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
        <div className="buttonFrame">
        <p><Link to={"/register"}>Załóż konto</Link></p>
            <button disabled={isInvalid} type="submit" onClick={this.onSubmit}>
              Zaloguj się
            </button>

            </div>  
              
            {error && <p className="errorMessage">{error.message}</p>}
      </div>
          )
      }
}

const LoginForm = compose(withRouter)(LoginFormBase);



export default LoginPage;

//author: Karolina Skorupska