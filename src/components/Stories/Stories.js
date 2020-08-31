import React,
 {useState,useEffect} 
 from "react";
 import axios from 'axios';

import Banner from "../Banner/Banner";
import ButtonsAndText from "../ButtonsAndText/ButtonsAndText";
import Post from './Post';


import bannerPhoto from "../../img/Banner/banner.svg";


const StoriesPage = (props) => {

  // przygotowane pod bazę danych
  const [ postsList, setPostsList ]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3001/messages')
    .then(response=>{
      return response.json();
    })
    .then((post)=>{
      setPostsList(post);
      
    });
    
  },[]);

 

  return(
    <>
    <Banner photo={bannerPhoto} />
    <div className="stories container">
      <ButtonsAndText />
      <Post />
       
       {/* informacje o poście wyciągane docelowo będą z bazy danych i propsy będą przekazywane do komponentu POST */}
      {postsList.map((post, index)=> <Post key={index} postInformation={post}/>)}

      
      {/* miejsce na pole formularza */}
    </div>
  </>

  )
  
}
  
export default StoriesPage;


//Karolina Skorupska