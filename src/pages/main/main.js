import React, { useState, useReducer } from "react";
import { Container } from "./styled";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";


export const Main = () => {

    
    const [toDo, setToDo] = useState("");

    const onChange = (e) => {
        setToDo(e.target.value)
      console.log(toDo)
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
      if(toDo === " "){
        return
      }
      setToDos((currentArray) => [toDo, ...currentArray])
      setToDo("");
    };
  
    const [toDos, setToDos] = useState([]);
  
    return (
      <div className="box">
        <h1>TO DO LIST</h1>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="入力ください" onChange={onChange} value={toDo}/>
          <button>submit</button>
        </form>
        <ul>
        {toDos.map((item,index)=><li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  };