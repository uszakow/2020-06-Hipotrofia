import {connect} from 'react-redux';
import LoginPage from '../components/LoginPage/LoginPage';
import {loginUser,logout} from '../redux/LoginActions';
//po tym komponent wie jak wyrenderowac tylko aktywnego uzytk. od teraz props-user
const mapState = (state) => ({ user: state.activeUser });
//login przyjmie dane z formularza (userDto)
const mapDispatch = (dispatch) => ({ loginUser: (userDto)=> dispatch(loginUser(userDto)), logoutUser: ()=> dispatch(logout())})


export default connect(mapState,mapDispatch)(LoginPage);