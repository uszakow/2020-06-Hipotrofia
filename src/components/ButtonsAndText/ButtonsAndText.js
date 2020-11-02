import React from 'react';

import Buttons from './Buttons';
import Text from './Text';


import './buttonsAndText.scss';



const ButtonsAndText = ()=>{
  //  const [subpagesList, setSubpagesList] = useState([]);
  //  useEffect(()=>{
  //   axios.get("http://localhost:3001/articleDto?page=3")
  //   .then(response=>{
  //     return response.json();
  //   })
  //   .then(data =>{
  //     setSubpagesList(data);
  //   });
  //  }, []);

   return(
    <div className="container_buttons_and_text">
        <Buttons />
        <Text  
        // subpagesList={subpagesList}
        />
      </div>
   );
};

export default ButtonsAndText;