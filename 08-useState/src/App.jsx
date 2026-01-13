import React, { useState } from 'react'

const App = () => {

//  const [a, setA] = useState(20)
//  const [user, setUser] = useState("Hello")
//  const [nums, setNums] = useState([1,2,3])
//  function chnageArray(){
//   setNums([3,2,1])
//  }

//  function changeUserName(){
//   setUser("World")
//  }
//  function change(){
// setA(30);
  
//  }

const [counter, setCounter] = useState(0);
function updateCounter(){
  setCounter(counter+1);
}
function decrementCounter(){
  setCounter(counter-1);
}

  return (
    <div>
      {/* <h1>Value of num is {a}</h1>
      <button onClick={change}>Click</button>
       <h1>Value of user is {user}</h1>
      <button onClick={changeUserName}>Click</button>
      <h1>Value of array is {nums}</h1>
      <button onClick={chnageArray}>Click</button>
       */}
       <h1>Current value of counter is  {counter}</h1>
       <button onClick={updateCounter}>Change</button>
       <button onClick={decrementCounter}>Decrease</button>


    </div>
  )
}

export default App