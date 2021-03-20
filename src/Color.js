import React from "react";
import { Link, useParams, Redirect} from "react-router-dom";

function Color({colors}) {

    const {color} = useParams();

    if (color) {
      let hex = colors[color];
      console.log(`********${hex}`)

      if (!hex) {
        <Redirect to="/"></Redirect>    
      }

      return (
        <div>
        <div className="Color" style={{ backgroundColor: hex }}>

          <p>this is {color}.</p>
          <p>Isn't it beautiful?</p>
          </div>
          <p>
            <Link to="/">Go back</Link>
          </p>
          </div>
      );
    }
    


}

export default Color;
