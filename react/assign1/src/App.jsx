import './App.css'
import { useState } from "react"
function App() {
  const [count, setCount] = useState(0)
  const [x,setX]=useState(1);
  let cnt=0;
  function handle(){
    cnt++;
    if(cnt===3) setX(x=>x*2);
    cnt=cnt%3;
  };
  return (
    <>
        <button onClick={handle} id="btn">{x}</button>
    </>
  )
}

export default App
