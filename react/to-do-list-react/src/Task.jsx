import { useState } from "react";

function Task({str ,taskId,fun}){
    const [check,setCheck]=useState(false);
    return(
        <>
            <div id={taskId} style={{display:"flex", flexDirection:"row-reverse",marginTop:"20px",alignItems:"center"}}>
                <h2 style={{textDecoration:check?"line-through":"none"}}>{str}</h2>
                <button onClick={()=>fun(taskId)} style={{marginLeft:"10px" ,marginRight:"10px",height:"20px"}}>X</button>
                <input type="radio" checked={check} onChange={(e)=>setCheck(!check)}/>
            </div>~
        </>
    )
}
export default Task;