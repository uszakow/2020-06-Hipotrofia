import React, { useState, useEffect }  from 'react';
import Buttons from './Buttons';
import Text from './Text';

import './buttonsAndText.scss';



const ButtonsAndText = ()=>(
/*    const [subpagesList, setSubpagesList] = useState([]);
   useEffect(()=>{
    axios.get(`http://localhost:3001/subpages`)
    .then(response=>{
      return response.json();
    })
    .then(data =>{
      setSubpagesList(data);
    });
   }, []); */


    <div className="container_buttons_and_text">
        <Buttons />
        <Text  
        // subpagesList={subpagesList}
        />
      </div>
);

export default ButtonsAndText;