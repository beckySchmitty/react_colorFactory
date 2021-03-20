import React, {useState} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Color from "./Color";
import ColorForm from "./ColorForm";
import ColorList from "./ColorList";

function Routes() {

    const initialColors = {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
      }

    const [colors, updateColors] = useState(initialColors);


    function addColor(newColorObj) {
        updateColors(prevColors => ({ ...prevColors, ...newColorObj }));
      }
    
  return (
    <Switch>
      <Route exact path="/colors">
          <ColorForm addColor={addColor} />
          <ColorList colors={colors} />
      </Route>
      <Route path="/colors/:color">
          <Color colors={colors} />
      </Route>
      <Redirect to="/colors" />
    </Switch>
  );
}

export default Routes;
