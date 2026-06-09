import { useState } from "react";
import { useEffect } from "react";
import './App.css'

function App(){

  const [input,setInput]=useState("");
  const [pass,setPass]=useState("");
  const [able,setAble]=useState(true);
  useEffect(()=>{
    let flag1=false;
    let str=input.split("@");
    if(str[1]==="gmail.com") flag1=true;
    let flag2=false;
    if(pass.length>=8)
    {
      let lowerCase=false;
      let upperCase=false;
      let speacialChar=false;
      let number=false;
      for(let i=0;i<pass.length;i++)
      {
        if(lowerCase&&upperCase&&speacialChar&&number) break;
        if(pass[i]>="0"&&pass[i]<="9") number=true;
        else if(pass[i]>="a"&&pass[i]<="z") lowerCase=true;
        else if(pass[i]>="A"&&pass[i]<="Z") upperCase=true;
        else speacialChar=true;
      }
      if(lowerCase&&upperCase&&speacialChar&&number) flag2=true;
      if(flag1&&flag2)  setAble(false);
      else setAble(true);
    }
  },[input,pass])

  function handle(){
    alert("Data Is Submited");
    setInput("");
    setPass("");
    setAble(true);
  };

  return(
    <>
    <div id='body'>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
      <button disabled={able} onClick={handle}>LOGIN</button>
      </div>
    </>
  )
};
export default App;