import { useState } from 'react'
import Card from './components/Card'

function App() {

  let obj={
    username:"Eyepatch",
    age:21
  }
  return (
    <>
    <Card username={"Asuna"} btntext={"Purchase"}/>
    <Card username={"Kirito"} btntext={"Favorite"}/>
    </>
  )
}

export default App
