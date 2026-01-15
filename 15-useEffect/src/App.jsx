import React, { useEffect, useState } from 'react'

const App = () => {

  const [first, setfirst] = useState(0)
  const [sec, setSec] = useState(0)
  useEffect(()=>{
    console.log("UseEffect Triggeed");
    
  },[sec])
  return (
    <div>
      <h1>{first}</h1>
      <button onClick={()=>{setfirst(first+1)}}>Click</button>
      <h1>{sec}</h1>
      <button onClick={()=>{setSec(sec+10)}}>Click</button>



    </div>
  )
}

export default App