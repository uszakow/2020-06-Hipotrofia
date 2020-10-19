import React, { Component } from 'react';
import "./ArticlesPage.scss";
import Banner from '../Banner/Banner';
import Article from './Article';

// import ImageBackground from '../../img/Articles/pexels-taryn-elliott-3889795\ 1.png';
import ImageTwojaHistoria from '../../img/Articles/Twoja historia.png';
import Axios from 'axios';


class ArticlesPage extends Component{
    state={
        articles: []
    };

    componentDidMount(){
        Axios.get("http://localhost:3001/articleDto?page=2")
        .then(res => {
            const articles = res.data;
            this.setState({ articles })
        })
    }

    render(){
        
        return(
            <div className="ArticlesPage container">
            <Banner/>
            <h1 className="h ">Artykuły</h1>
            <div className="ArticlesBanner">
            {/* <img src={ImageBackground} alt="Image Twoja Historia"></img> */}
                <div className="ArticlesBanner-TextBox">
                    
                    <img src={ImageTwojaHistoria} alt="Twoja historia"></img>
                    
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            {this.state.articles.map((article, index)=> <Article key={index} article={article} />)}
        </div>
        )
    }
}

// const ArticlesPage = () => {
//     const [list, setList] = useState([]);
//     useEffect(()=>{
//         Axios.get("http://localhost:3001/articleDto?page=2")
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             setList(data);
//         });
//     },[]);

//     return(
//         <div className="ArticlesPage container">
//             <Banner/>
//             <h1 className="h ">Artykuły</h1>
//             <div className="ArticlesBanner">
//             {/* <img src={ImageBackground} alt="Image Twoja Historia"></img> */}
//                 <div className="ArticlesBanner-TextBox">
                    
//                     <img src={ImageTwojaHistoria} alt="Twoja historia"></img>
                    
//                     <div className="line"></div>
//                     <div className="line"></div>
//                 </div>
//             </div>
//             <h3>{list}</h3>
//             <Article/>
//         </div>
//     )
// }

export default ArticlesPage;

//Karolina Skorupska