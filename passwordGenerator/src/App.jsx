import { useState,useCallback, useRef } from 'react'
import './App.css'
import { useEffect } from 'react'
function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")

  //ref hook
  const passwordRef=useRef(null)
  
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let string="ABCDEFGHIJKLMNOPQRSTVUWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      string+='1234567890'
    }
    if(charAllowed){
      string+="~!@#$%^&*()}{?|/"
    }
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*string.length+1)
      pass+=string.charAt(char)
    }
    setPassword(pass)
  },
  [length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div style={{width:"800px", height:"300px", backgroundColor:"pink", marginLeft:"240px", borderRadius:"16px", boxShadow:"4px 4px white"}}>
    <h1 style={{textAlign:"center", color:"black", paddingTop:"10px", fontSize:"40px", }}>Password Generator</h1>
      <div style={{display:"flex", paddingLeft:"10px", paddingRight:"10px", marginBottom:"10px"}}>
        <input type='text' ref={passwordRef} value={password} style={{width:"700px", height:"30px", fontFamily:"georgia", fontSize:"20px",borderRadius:"10px", padding:"10px"}}  placeholder='Password' readOnly/>
        <button onClick={copyPasswordToClipboard} style={{width:"80px", borderRadius:"12px", marginLeft:"10px",fontSize:"18px",fontFamily:"georgia",backgroundColor:"lightBlue"}}>Copy</button>
      </div>
      <div style={{display:"flex"}}>
        <div style={{paddingLeft:"8px"}}>
          <input onChange={(e)=>{setLength(e.target.value)}} type='range'  min={8} max={40} value={length} />
          <label  style={{fontFamily:"georgia", fontSize:"18px", color:"black"}}>Length:{length}</label>
        </div>
        <br/>
        <div style={{paddingLeft:"20px"}}>
        <input type='checkbox' onChange={()=>{setCharAllowed((prev)=>!prev)}} defaultChecked={charAllowed} id='characterInput' />
          <label  style={{fontFamily:"georgia", fontSize:"20px", color:"black" }}>Character</label>
        </div>
        <div style={{paddingLeft:"20px"}}>
        <input type='checkbox' onChange={()=>{setNumberAllowed((prev)=>!prev)}} defaultChecked={numberAllowed} id='numberInput' />
          <label  style={{fontFamily:"georgia", fontSize:"20px", color:"black"}}>Number</label>
        </div>
      </div>

    </div>
    </>
  )
}
export default App