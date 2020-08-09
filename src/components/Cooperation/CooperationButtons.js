import React from 'react';
import { Link } from 'react-router-dom';

const CooperationButtons = () => (
    
      <div className="cooperation_container_buttons">
        <Link to="/cooperation">
          <button className="współpraca">Współpraca</button>
        </Link>
        <Link to="/difference">
          <button className="difference">Różnica między SGA a IUGR</button>
        </Link>
        <Link to="/programs">
          <button className="programs">Programy leczenia w Polsce</button>
        </Link>
        <Link to="/stories">
          <button className="stories">Historie dzieci</button>
        </Link>
        <Link to="/questions">
          <button className="questions">Najczęściej zadawane pytania</button>
        </Link>
        <Link to="/foundation">
          <button className="foundation">Magic foundation</button>
        </Link>
      </div>
      
);

export default CooperationButtons;