import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav, Carousel } from "react-bootstrap";
import { Link, Routes, Route, Switch } from "react-router-dom";
import Data from "./data.js";
import Main from "./components/main/Main.js";
import Detail from "./components/product/Detail.js";
import Products from "./components/product/List.js";

function App() {
  //데이터는 상위컴포넌트에 보관한 다음 하위 컴포넌트로 props를 사용해 전송하는 방식을 사용
  let [shoes, setShoes] = useState(Data);

  return (
    <div className="App">
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
        <Route path="/" element={<Main shoes={shoes} setShoes={setShoes}/>} />
        <Route path="/list" element={<Products shoes={shoes}/>} />
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
      </Routes>
    </div>
  );
}

export default App;
