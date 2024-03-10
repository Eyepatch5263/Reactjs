import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Eyepatch5263')
    //     .then((res)=>res.json())
    //     .then((data=>{
    //         console.log(data)
    //         setData(data)
    //     }))
    // },[])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github Followers:{data.followers}<br/>
            <img style={{width:"200px", borderRadius:"100px"}} src={data.avatar_url} alt="Git Pic"/>
        </div>
    )
}

export default Github
export const githubInfoLoader=async()=>{
    const res=await fetch("https://api.github.com/users/Eyepatch5263")
    return res.json();
}