// import axios from 'axios';

const LOGIN = 'login';
const LOGOUT = 'logout';

const login = (userDto) => ({
    type: LOGIN,
    userDto
});

const logout = () => ({
    type: LOGOUT,
});

const getUser = async (userDto) => {
    const url = 'http://localhost:3001/users'    
    
    return fetch(url + '?email=' + userDto.email, {
        method: 'GET', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'TYPE': 'Login',
        }
      })
        .then(result => result.json())
        .then(result => result[0])
        .then(result => result.token)
        .then(result => parseJwt(result))
      
  };



        //funkcja, wywołanie dwóch akcji jedna po drugiej / dispatch - wywołuje funkcje, które mają wpływ na reducer
    const loginUser = (userDto) => (dispatch) => {    getUser(userDto)
      .then(result => dispatch(login(result)));    } ;
      
      
     
       
      //funkcja która wyciaga dane z tokenu
      const parseJwt = (token) => {
      try {
        const uD = JSON.parse(atob(token.split('.')[1]));
        const fUD = {
          token: token,
          name: uD.name, 
          email: uD.email, 
          roleName: uD.roleName,
        }
        return fUD;
      } catch (e) {
        return null;
      }
    };

    export {LOGIN, LOGOUT,login, logout, loginUser };



