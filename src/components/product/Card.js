import { useNavigate} from "react-router-dom";
import React, { useState, useContext } from "react";

function Card(props) {
  let navigate = useNavigate();
  return (
    <div className="col-md-4">
      <img src={props.shoes.img} width="100%" onClick={()=>{navigate(`/detail/${props.shoes.id}`)}} />
      <h4 >{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  );
}

export default Card;
