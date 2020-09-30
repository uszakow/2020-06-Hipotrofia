import {connect} from 'react-redux';
import LoginPage from '../components/LoginPage/LoginPage';
import {loginUser,logout} from '../redux/LoginActions';

const mapState = (state) => ({ user: state.activeUser });

const mapDispatch = (dispatch) => ({ loginUser: (userDto)=> dispatch(loginUser(userDto)), logoutUser: ()=> dispatch(logout())})


export default connect(mapState,mapDispatch)(LoginPage);