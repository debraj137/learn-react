import React, { useEffect, useState } from 'react'

const FetchComponent = () => {
  
  const [data, setData] = useState(null);
  
  useEffect(()=>{
    fetch("/api").then(res=>res.json()).then(setData);
  },[])
  return (
    <div>{data ? data.name : 'Loading'}</div>
  )
}

export default FetchComponent