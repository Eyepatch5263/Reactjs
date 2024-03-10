import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../context/userContext'


const Login = () => {
    const [username,setUsername] = useState('')
    const [Password,setPassword] = useState('')

    const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,Password})
    }
    return (
    <div>
        <h1>Login</h1>
        <input onChange={(e)=>setUsername(e.target.value)} type="text" value={username} placeholder='Username'/>
        <input onChange={(e)=>setPassword(e.target.value)} type='text' value={Password} placeholder='Password' />
        <button onClick={handleSubmit}>Submit</button>
        </div>
)
    }

export default Login
