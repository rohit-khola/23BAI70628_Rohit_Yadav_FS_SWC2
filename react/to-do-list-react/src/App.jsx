import {useState} from 'react'
import Task from './Task.jsx'
import { useEffect } from 'react';
import './App.css';

function App(){

  const [input,setInput]=useState("");
  const [task,setTask]=useState([]);
  const [key,setKey]=useState(0);

  function handle(){
    if(input==="") return;
    setTask(prev=>[...prev,{key,value:input}]);
    setKey(prev=>prev+1);
    setInput("");
  };

  function del(id){
      setTask(prev=>prev.filter((t)=>t.key!==id));
  };

  return(
    <>
    <div id='app'>
      <h1>TO DO LIST</h1>
      <input type="text" id='input' value={input} onChange={(e)=> setInput(e.target.value)}/>
      <button id='btn' onClick={handle}>ADD</button>
      {task.map((t)=>(<Task key={t.key} str={t.value} taskId={t.key} fun={del} />))}
    </div>
    </>
  )
}
export default App;