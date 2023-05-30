import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
import "./Create.scss";

const Createw = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const [inputData, setInputData] = useState({
    id:'',
    task: '', 
  })

  const handleSubmit = () => {
    api.post('/tasks')
    .then(res => 
       { alert('Successfuly'),
        navigate('/kunlik', {replace: true})
        console.log('Salom' , res);
      }
      )
  }

  return (
    <div className="Careatew">
      <div className="inputs">
        <h1>Add Task</h1>
        <label>
          <h2>Id:</h2>
          <input type="number" value={inputData.id} onChange={e => setInputData({...inputData, id: e.target.value})} />
        </label>
        <label>
          <h2>Task:</h2>
          <input type="text" value={inputData.task} onChange={e => setInputData({...inputData, task: e.target.value})} />
        </label>
        <button onClick={handleSubmit} >Submit</button>
      </div>
    </div>
  );
};

export default Createw;
