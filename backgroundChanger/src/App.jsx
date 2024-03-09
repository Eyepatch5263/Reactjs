import { useState } from 'react'

const root=document.getElementById("#root")
function App() {
  const [color,setColor]=useState("black")
  const changeColor=()=>{
    const color=document.getElementsByClassName('btn').value.toLower()
    setColor(color)
  }
  return(
    <>
    <div style={{display:"flex", marginTop:"12px", marginLeft:"6px"}}>
      <button className='btn' onClick={()=>{setColor("red")}} style={{width:"200px", height:"40px"}}>Red</button>
      <button onClick={()=>{setColor("green")}} style={{width:"200px", height:"40px"}}>Green</button>
      <button onClick={()=>{setColor("yellow")}} style={{width:"200px", height:"40px"}}>Yellow</button>
      <button onClick={()=>{setColor("orange")}} style={{width:"200px", height:"40px"}}>Orange</button>
      <button onClick={()=>{setColor("blue")}} style={{width:"200px", height:"40px"}}>Blue</button>
      <button onClick={()=>{setColor("cyan")}} style={{width:"200px", height:"40px"}}>Cyan</button>
      <button onClick={()=>{setColor("purple")}} style={{width:"200px", height:"40px"}}>Purple</button>
    </div>
    <div style={{backgroundColor:color, height:"600px", marginTop:"20px"}}>
    </div>
    </>
  )
}

export default App
