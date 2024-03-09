import { useEffect, useState } from "react"
import Test from "./Test"
function App() {

  let [counter,setCounter]=useState(0)
  const addValue=()=>{
    counter++
    setCounter(counter)
    console.log(counter)
  }

  const decValue=()=>{
    if(counter==0){
    }
    else{
      counter--
      setCounter(counter)
      console.log(counter)
    }
  }
  return (
    <>
    <h1>{counter}</h1>
        <button onClick={addValue}>Add</button>
        <br/>
        <button onClick={decValue}>Remove</button>
    </>
  )
}

export default App
