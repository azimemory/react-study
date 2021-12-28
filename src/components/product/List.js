import React, { useState } from "react";
import Card from "./Card.js";

function App(props) {
  let shoes = props.shoes;
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
