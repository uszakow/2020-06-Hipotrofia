import {connect} from 'react-redux';

import Menu from '../components/Menu/Menu';

import {getTagFunction} from '../redux/tagActions';

const mapDispatch = (dispatch) => ({ getAllTags: ()=> dispatch(getTagFunction())});

export default connect(null, mapDispatch)(Menu);