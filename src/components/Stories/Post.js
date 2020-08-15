import React, { Component } from 'react';

import ArrowUp from '../../img/Stories/Vector.png';

import './Stories.scss';

class Post extends Component {
    state={
        wrapperIsOpen:false,
    }
    wrapperHandler = () => {
        this.setState({
            wrapperIsOpen : !this.state.wrapperIsOpen
        });
    };

    render(){
        
        return(
            <div className="stories-post-container">
            <div className="stories-post-horizontal-line"></div>
            <h2 className="stories-post-title">{this.props.title}Tytuł posta</h2>
            <p className="stories-post-date">{this.props.date}czas publikacji</p>
    
            <div className="stories-post-content">
              <p className="stories-post-content-sample-text">
                  {this.props.sampleText}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <div className='stories-post-button-more'>Czytaj więcej</div>

              <p className="stories-post-content-all-text" id={this.state.wrapperIsOpen ? "visible" : "hidden"}>
                  {this.props.allText}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
              </p>
            </div>
            <div className="stories-post-arrow-up" id={this.state.wrapperIsOpen ? "visible" : "hidden"}><img src={ArrowUp} alt='arrow up'></img></div>
          </div>
        )
    }
}



export default Post;