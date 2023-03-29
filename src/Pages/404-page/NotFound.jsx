import React from "react";
import { Link } from "react-router-dom";

function NotFound() {

  return (

    <>    
      <div className="outer-container">
        <div className="inner-container">
            <main>
              <h2>Helaas pagina niet gevonden. Vanuit de <Link to="/">Homepage</Link> kunt u wellicht meer vinden</h2>
            </main>
        </div>
      </div>

    </>
    
  
 )

}

export default NotFound;