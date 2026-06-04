import './App.css'
import { useState } from "react"
function App() {
const [arr,setA]=useState([]);
const [idx,setI]=useState(arr.length-1);

const [str,setS]=useState("");

const [val,setV]=useState("");

function handle(){
  setV(val=>str);
  setA(a=>[...a,str]);
  setI(idx=>idx+1);
};
function und(){
  if(arr.length>0)setI(idx=>idx-1);
  if(idx-1>=0)
  {
    setV(val=>arr[idx-1]);
  }
}
function redo(){
  if(idx<arr.length) setI(idx=>idx+1);
  if(idx+1<arr.length)
  {
    setV(val=>arr[idx+1]);
  }
}

  return (
    <>
        <div>
        <input id='input' type="text" value={str} onChange={(e)=>setS(e.target.value)}/>
        <button id='add' onClick={handle}>Add</button>
        </div>
        <div>
          <h1>{val}</h1>
        </div>
        <div>
          <button id='undo' onClick={und}>Undo</button>
          <button id='redo' onClick={redo}>Redo</button>
        </div>
    </>
  )
}

export default App
