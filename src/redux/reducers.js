import { LOGIN, LOGOUT } from "./LoginActions";
import { GET_TAG } from "./tagActions";

import { combineReducers } from "redux";


const INITIAL_STATE_LOGIN = {
  token: "",
  name: "",
  email: "",
  roleName: "",
};

//obiekt ktory definiuje stan - funkcja switch - nazwa obiektu pdrzechowywanego w storze
const activeUser = (state = INITIAL_STATE_LOGIN, action) => {
  switch (action.type) {
    case LOGIN:
      state = {
        token: action.userDto.token,
        name: action.userDto.name,
        email: action.userDto.email,
        roleName: action.userDto.roleName,
      };
      return state;

    case LOGOUT:
      state = INITIAL_STATE_LOGIN;
      return state;

    default:
      return state;
  }
};

//kolejny reducer do tagów

const INITIAL_STATE_TAG = [];

//funkcja- tworzymy obiekt przechowywany w storze
const allTags = (state = INITIAL_STATE_TAG, action) => {
  switch (action.type) {
    case GET_TAG:
      state = action.tagsArray;

      return state;

    default:
      return state;
  }
};

export default combineReducers({ activeUser, allTags });
//wrzuca obiekty do stora
