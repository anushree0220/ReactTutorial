import React, { useEffect, useState } from 'react'
import UserCard from '../Components/UserCard'

function User() {
    const [data,setdata]=useState(null);
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await fetch("https://fakestoreapi.com/users");
            const userdata=await res.json();
            setdata(userdata);
        }
        fetchData();
    },[])
  return (
    <div className='flex justify-center items-center flex-wrap pt-4 bg-zinc-200 gap-4' >
        {data? data.map((item,index)=>(
            <UserCard user={item} key={index}/>
        )):(<div className='w-screen h-screen bg-zinc-400 text-red-500 text-5xl font-semibold flex justify-center items-center'>Loading....</div>)}
    </div>
  )
}

export default User