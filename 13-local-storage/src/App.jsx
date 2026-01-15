import React from 'react'

const App = () => {

  localStorage.clear();
  sessionStorage.clear();
  localStorage.setItem('user','soham')//to set
  const item = localStorage.getItem('user')//to get
  localStorage.removeItem('user')
  const user={"username":"soham","age":43};
  localStorage.setItem('users',JSON.stringify(user))
  const ans=JSON.parse(localStorage.getItem('user'))
  return (
    <div>App</div>
  )
}

export default App