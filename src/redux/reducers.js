import {LOGIN, LOGOUT } from './LoginActions';

import {combineReducers} from 'redux';
import { useReducer } from 'react';
//? nie wiem czy trzeba

const INITIAL_STATE = {

    token: '',
    name: '', 
    email: '', 
    roleName: '',

  };

const activeUser = (state= INITIAL_STATE,  action )=>{ 
    switch (action.type) {
        case LOGIN:
            
            state={
                token: action.userDto.token,
                name: action.userDto.name, 
                email: action.userDto.email, 
                roleName: action.userDto.roleName,
            }
            return state;

            case LOGOUT:
                state= INITIAL_STATE;
                return state;
                
        default:
          return state;
    }
};

export default combineReducers({activeUser});
