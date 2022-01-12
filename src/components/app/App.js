import React, { useState, useContext } from "react";
import "./App.css";
import { Navbar, Container, Nav, Carousel } from "react-bootstrap";
import { Routes, Route} from "react-router-dom";
import Data from "../../data.js";
import Main from "../main/Main.js";
import Detail from "../product/Detail.js";
import Products from "../product/List.js";

export let stockContext = React.createContext();

function App() {
  //데이터는 상위컴포넌트에 보관한 다음 하위 컴포넌트로 props를 사용해 전송하는 방식을 사용
  //let [shoes, setShoes] = useState(Data);

  return (
    <div className="App">
      <stockContext.Provider value={useState(Data)}>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as="a" href="/">Shop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as="a" href="/" >Home</Nav.Link>
              <Nav.Link as="a" href="/list" >Product</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/list" element={<Products />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </stockContext.Provider>
      
    </div>
  );
}

export default App;
