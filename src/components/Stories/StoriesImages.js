import React, { Component } from "react";

import SampleImage from "../../img/Stories/Rectangle 47.png";

class StoriesImages extends Component {
  render() {
    
    return (
      <div className="stories-images">
        <div className="stories-images-container">
          <img src={SampleImage} alt="stories sample1 "></img>
          <img src={SampleImage} alt="stories samlpe2 "></img>
          <img src={SampleImage} alt="stories sample3 "></img>
          <img src={SampleImage} alt="stories sample4 "></img>
            {/* {this.props.images.map((index, images)=>
                <img src={this.props.src} alt={this.props.alt}></img>
            )} */}


        </div>
      </div>
    );
  }
}

export default StoriesImages;

//Karolina Skorupska
