import React from 'react';
import "./ArticlesPage.scss";
import Banner from '../Banner/Banner';

// import ImageBackground from '../../img/Articles/pexels-taryn-elliott-3889795\ 1.png';
import ImageTwojaHistoria from '../../img/Articles/Twoja historia.png';


const ArticlesPage = () => {
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
            <div className="ArticlesPage content">
                <div className="ArticlesPage-Article">

                </div>
            </div>
        </div>
    )
}

export default ArticlesPage;