import React, { useState, useContext } from "react";
import axios from "axios";
import Card from "../product/Card.js";
import {stockContext} from "../app/App"

function App() {

  let [shoes, setShoes] = useContext(stockContext);

  return (
    <div className="App">
      <div className="position-relative overflow-hidden p-3 p-md-5 text-center main">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal">Punny headline</h1>
          <p className="lead fw-normal">
            And an even wittier subheading to boot. Jumpstart your marketing
            efforts with this example based on Apple’s marketing pages.
          </p>
          <a className="btn btn-outline-secondary btn-main" href="#">
            Coming soon
          </a>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div className="container">
        <div className="row">
          {shoes.map((e, i) => {
            return <Card shoes={e} key={i} />;
          })}
        </div>
      </div>
      <div className="row">
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((res) => {
                let shoesTemp = [...shoes];
                res.data.forEach((e) => {
                  e.img = "https://codingapple1.github.io/shop/shoes1.jpg";
                  shoesTemp.push(e);
                })
                setShoes(shoesTemp);
              });
          }}
        >
          더보기
        </button>
      </div>
    </div>
  );
}

export default App;
