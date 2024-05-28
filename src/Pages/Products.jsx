import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

function Products() {
    const [data,setdata]=useState(null);
    useEffect(()=>{
        const fetchData=async()=>{
            const res = await fetch("https://fakestoreapi.com/products");
            const data2=await res.json();
            setdata(data2);
        }
        fetchData();
    },[])
  
  return (
    <>
    <div className='flex flex-wrap bg-gray-300 justify-center'>
        {data? data.map((item,index)=>(
            <Card product={item} key={index}/>
        )):(<div className='h-screen w-screen flex justify-center items-center text-5xl text-red-500'> Loading...</div> )}
    </div>
    </>
  )
}

export default Products