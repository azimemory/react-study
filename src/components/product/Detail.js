import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Detail.scss"
import {stockContext} from "../app/App"

function App() {

  let [shoes, setShoes] = useContext(stockContext);

  //useEffect는 여러개 작성가능
  //작성한 순서대로 실행된다.
  useEffect(()=>{
    //2초 후에 alert창 제거
   let timer =  setTimeout(()=>{
      setAlert(false);
    },2000);

    //컴포넌트가 사라질 때 실행할 코드를 return되는 함수에 작성
    return () => {};
  });

  let [alert, setAlert] = useState(true);

  let {id} = useParams(); //url parameter로 전송된 값을 저장
  let navigate = useNavigate();

  return (    
    <div className="container">
      
      {
        alert == true 
        ? <div className="my-alert">
            <p>재고가 얼마 남지 않았습니다.</p>
          </div>
        : null
      }

      <div className="row">
        <div className="col-md-6">
          <img
            src={shoes[id].img}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5 red">{shoes[id].title}</h4>
          <p>{shoes[id].content}</p>
          <p>{shoes[id].price}원</p>
          <button className="btn btn-danger" >주문하기</button>           
          <button className="btn btn-primary" onClick={()=>{
            navigate(-1);
          }}>뒤로가기</button>
        </div>
      </div>
    </div>    
  );
}

export default App;