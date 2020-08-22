import React
//  {useState,useEffect} 
 from "react";

import Banner from "../Banner/Banner";
import ButtonsAndText from "../ButtonsAndText/ButtonsAndText";
import Post from './Post';


import bannerPhoto from "../../img/Banner/banner.svg";


const StoriesPage = (props) => {

  // przygotowane pod bazę danych
/*   const [ postsList, setPostsList ]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3001/BLOG-POSTS- tutaj nazwa z bazy danych')
    .then((response)=>{
      return response.json();
    })
    .then((posts)=>{
      setPostsList(posts);
    });
    
  },[]); */

  return(
    <>
    <Banner photo={bannerPhoto} />
    <div className="stories container">
      <ButtonsAndText />
      <Post />
      <Post />
      <Post />
       
       {/* informacje o poście wyciągane docelowo będą z bazy danych i propsy będą przekazywane do komponentu POST */}
      {/* {postsList.map((post, index)=> <Post key={index} postInformation={postInformation}/>)}*/}

      
      {/* miejsce na pole formularza */}
    </div>
  </>

  )
  
}
  
export default StoriesPage;


//Karolina Skorupska