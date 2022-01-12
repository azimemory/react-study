import React, { useState, useContext } from "react";
import Card from "./Card.js";
import {stockContext} from "../app/App"

function App() {
  let [shoes, setShoes] = useContext(stockContext);

  return (
    <div className="container">
      <div className="row">
        {shoes.map((e, i) => {
          return <Card shoes={e} key={i} />;
        })}
      </div>
    </div>
  );
}

export default App;
