import React from 'react'

const App = () => {
  function clicked(){
    console.log("clicked");
    
  }
  function typed(){
    console.log("typing");
    
  }
  return (
    <div>Hello

      <input  onChange={function(e){
        console.log(e.target.value);
        
      }} type="text" name="" id="" />


      <button onClick={clicked}>Submit</button>
    </div>
  )
}

export default App