import {connect} from 'react-redux';
import ArticlesPage from '../components/ArticlesPage/ArticlesPage';


//komponent zaciąga wszystkie tagi
const mapState = (state) => ({ tags : state.allTags });

//łaczymy state z obiektami z komponentem reactowym

export default connect(mapState)(ArticlesPage);