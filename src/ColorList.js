import React from "react";
import { Link } from "react-router-dom";

function ColorList({ colors }) {
  return (
    <div>
    <header>
        <h1>COLOR FACTORY </h1>
        <h2>
          <Link to="/colors/new">Add a color</Link>
        </h2>
      </header>
      <h3>COLORS</h3>
      <p>Select to learn more:</p>
      <ul>
        {Object.keys(colors).map(colorName => (
        <li key={colorName}>
          <Link to={`/colors/${colorName}`}>{colorName}</Link>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorList;