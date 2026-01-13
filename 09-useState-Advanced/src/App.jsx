import React, { useState } from 'react'

const App = () => {
  // const [num, setNum] = useState(0)
  // function doSomething(){
  //   setNum(num+5)
  // }
  const [user, serUser] = useState({user:"hello",age:21});
  const [num, setNum] = useState([1,2,3,5])
  const updateNum=()=>{
    const NewNum=[...num];
    NewNum.push(7);
    setNum(NewNum);
  }
  // const btnCliced=()=>{
  //   const NewUser={...user};
  //   NewUser.user="world"
  //   NewUser.age=30;
  //   serUser(NewUser);
   
  // }
  return (
    <div>
      {/* <h1>{num}</h1>
      <button onClick={doSomething}>clickme</button> */}
      {/* <h1>{user.user},{user.age}</h1>
      <button onClick={btnCliced}>clickme</button> */}
      <h1>{num}</h1>
      <button onClick={updateNum}>clickme</button>


    </div>
  )
}

export default App